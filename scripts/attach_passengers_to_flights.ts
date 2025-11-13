import { prisma } from "../2025-11_airline_datenmodell/repository/db.ts";

function randomPart(len = 6) {
  return Math.random().toString(36).substring(2, 2 + len);
}
function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

async function main() {
  console.log("Start attaching passengers to existing flights...");

  const flights = await prisma.flight.findMany({ select: { id: true, plane: { select: { id: true, capacity: true } }, passengers: { select: { id: true } } } });
  console.log(`Found ${flights.length} flights`);

  // load pool of existing passenger ids
  const passengersPool = (await prisma.passenger.findMany({ select: { id: true } })).map(p => p.id);
  console.log(`Passenger pool size: ${passengersPool.length}`);

  let flightsAttached = 0;
  for (const f of flights) {
    const capacity = f.plane?.capacity ?? 100;
    const minLoadFactor = 0.3;
    const maxLoadFactor = 0.9;
    const minPassengers = Math.max(1, Math.floor(capacity * minLoadFactor));
    const maxPassengers = Math.max(minPassengers, Math.floor(capacity * maxLoadFactor));
    const target = Math.min(capacity, Math.max(1, Math.floor(minPassengers + Math.random() * (maxPassengers - minPassengers + 1))));

    const existing = (f.passengers ?? []).map(p => p.id);
    const needed = Math.max(0, target - existing.length);
    if (needed === 0) continue; // already satisfied

    // ensure pool has enough unique candidates excluding existing
    const available = passengersPool.filter(id => !existing.includes(id));
    while (available.length < needed) {
      // create some new passengers in batch (simple random names)
      const first = capitalize(randomPart(6));
      const last = capitalize(randomPart(6));
      const email = `${first.toLowerCase()}.${last.toLowerCase()}.${crypto.randomUUID().slice(0,8)}@example.com`;
      const newP = await prisma.passenger.create({ data: { firstName: first, lastName: last, email } });
      passengersPool.push(newP.id);
      available.push(newP.id);
    }

    // pick `needed` unique ids from available
    const selected = new Set<string>();
    while (selected.size < needed) {
      const id = available[Math.floor(Math.random() * available.length)];
      selected.add(id);
    }

    const connectArr = Array.from(selected).map(id => ({ id }));

    await prisma.flight.update({ where: { id: f.id }, data: { passengers: { connect: connectArr } } });
    flightsAttached++;

    if (flightsAttached % 100 === 0) console.log(`Attached passengers to ${flightsAttached} flights...`);
  }

  console.log(`Done. Flights updated: ${flightsAttached}`);
  await prisma.$disconnect();
}

main().catch(e => { console.error(e); Deno.exit(1); });
