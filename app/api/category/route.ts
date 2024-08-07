import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const category = await prisma.category.findMany({
            orderBy: {createdAt: 'desc'}
        })
        return NextResponse.json(category)
    } catch (error) {
        console.log(error)
    }
}