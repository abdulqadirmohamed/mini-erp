import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const product = await prisma.product.findMany({
            include: { Category: { select: { name: true } } },
            orderBy: {createdAt: "desc"}
        })
        return NextResponse.json(product)
    } catch (error) {
        console.log(error)
    }
}