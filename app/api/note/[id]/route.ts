import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import Pusher from "pusher";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const getByIdUser = await prisma.note.findMany({
      where: {
        idUser: +params.id,
      },
      orderBy: {
        id: "asc",
      },
    });
    return NextResponse.json(getByIdUser);
  } catch (error) {
    return NextResponse.json({ message: "Failed" }, { status: 400 });
  }
}

export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const body = await req.json();
    const updateNote = await prisma.note.update({
      where: { id: +params.id },
      data: {
        title: body.title,
        icon: body.icon,
        background: body.background,
        content: body.content,
      },
    });
    const pusher = new Pusher({
      appId: "1771183",
      key: "445ee293670f7b1800e0",
      secret: "83d0a819190f070f4e7d",
      cluster: "ap1",
      useTLS: true,
    });
    pusher.trigger("my-exercise", "update-note", {body:updateNote});
    return NextResponse.json(updateNote);
  } catch (error) {
    return NextResponse.json({ message: "Failed" }, { status: 400 });
  }
}

// export async function DELETE(
//   req: Request,
//   {
//     params,
//   }: {
//     params: { id: string };
//   }
// ) {
//   try {
//     return  await prisma.note.delete({
//       where:{
//         id:+params.id
//       }
//     })
//   } catch (error) {
//     return NextResponse.json({ message: "Failed" }, { status: 400 });
//   }
// }
