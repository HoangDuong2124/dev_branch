import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const addNote = await prisma.note.create({
      data: {
        idUser: body.idUser,
        title: body.title,
        icon: body.icon,
        background: body.background,
        content: body.content,
      },
    });
    return NextResponse.json(addNote);
  } catch (error) {
    return NextResponse.json({ messenger: "fail" }, { status: 400 });
  }
}
