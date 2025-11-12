import { PrismaClient } from "./prisma/client/client.ts";

const prisma = new PrismaClient();

async function main(){
    const passengerCount = await prisma.passenger.count();
    const planeCount = await prisma.plane.count();
    const airportCount = await prisma.airport.count();
    const flightCount = await prisma.flight.count();
    console.log(JSON.stringify({ passengerCount, planeCount, airportCount, flightCount }, null, 2));
    await prisma.$disconnect();
}

main().catch((e) => {
    console.error('Error:', e);
    Deno.exit(1);
});
