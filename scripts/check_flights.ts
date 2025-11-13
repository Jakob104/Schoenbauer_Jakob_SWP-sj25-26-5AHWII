import { prisma } from "../2025-11_airline_datenmodell/repository/db.ts";

async function main() {
  const flights = await prisma.flight.findMany({
    select: {
      id: true,
      flightNumber: true,
      passengers: { select: { id: true } },
      plane: { select: { id: true, capacity: true } }
    }
  });

  const total = flights.length;
  const noPassengers = flights.filter(f => !f.passengers || f.passengers.length === 0);
  console.log(`Total flights: ${total}`);
  console.log(`Flights without passengers: ${noPassengers.length}`);
  if (noPassengers.length > 0) {
    console.log("Sample flights without passengers:", noPassengers.slice(0, 10).map(f => ({ id: f.id, flightNumber: f.flightNumber })));
  } else {
    console.log("All flights have at least one passenger.");
  }

  // show a quick distribution sample
  const passengerCounts = flights.map(f => f.passengers.length);
  const avg = passengerCounts.reduce((a,b) => a+b, 0) / (passengerCounts.length || 1);
  console.log(`Average passengers per flight: ${avg.toFixed(2)}`);

  await prisma.$disconnect();
}

main().catch(e => { console.error(e); Deno.exit(1); });
