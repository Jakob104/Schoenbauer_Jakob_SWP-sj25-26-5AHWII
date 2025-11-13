import { Prisma } from "model";
import { prisma } from "./db.ts";

export async function count() {
	return await prisma.flight.count();
}

export async function create(data: Prisma.FlightCreateArgs["data"]) {
	return await prisma.flight.create({ data });
}

export async function findMany() {
	return await prisma.flight.findMany();
}