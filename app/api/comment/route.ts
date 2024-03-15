import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import Pusher from "pusher";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const send = await prisma.comment.create({
      data: {
        idUser: body.idUser,
        idNote: body.idNote,
        comment: body.comment,
      },
      include:{
        user:{
          select:{
            id:true,
            name:true
          }
        }
      }
    });
    const pusher = new Pusher({
      appId: "1771183",
      key: "445ee293670f7b1800e0",
      secret: "83d0a819190f070f4e7d",
      cluster: "ap1",
      useTLS: true,
    });
    pusher.trigger("my-exercise", "send-comment", {body:send});
    return NextResponse.json(send);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 400,
      }
    );
  }
}
