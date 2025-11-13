import { PrismaClient } from "../prisma/client/client.ts";
export const prisma = new PrismaClient();

export async function disconnect() {
	try {
		await prisma.$disconnect();
	} catch (_e) {
		// ignore errors during disconnect in simple scripts
	}
}