import { Prisma } from "model";
import { prisma } from "./db.ts";

export async function count() {
	return await prisma.plane.count();
}

export async function create(data: Prisma.PlaneCreateArgs["data"]) {
	return await prisma.plane.create({ data });
}

export async function findMany() {
	return await prisma.plane.findMany();
}