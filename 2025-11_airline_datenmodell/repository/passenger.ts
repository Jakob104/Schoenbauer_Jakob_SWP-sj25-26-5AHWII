import { Prisma } from "model";
import { prisma } from "./db.ts";

export async function count() {
  return await prisma.passenger.count();
}
export async function create(data: Prisma.PassengerCreateArgs["data"]) {
    return await prisma.passenger.create({ data });
}
export async function findMany() {
  return await prisma.passenger.findMany();
}