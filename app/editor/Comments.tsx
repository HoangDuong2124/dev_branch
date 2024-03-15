"use client";
import { groupComment } from "@/interfaces";
import { fetchJSON } from "@/utils/fetchURL";
import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";

const Comments = ({ param }: { param: string }) => {
  const [allComment, setAllComment] = useState<groupComment[]>([]);
  const fomatDate = (date: Date) => {
    const date_string = date;
    const date_object = new Date(date_string);
    const year = date_object.getFullYear();
    const month = (date_object.getMonth() + 1).toString().padStart(2, "0");
    const day = date_object.getDate().toString().padStart(2, "0");
    const hour = date_object.getHours().toString().padStart(2, "0");
    const minute = date_object.getMinutes().toString().padStart(2, "0");
    const formatted_date =
      hour + ":" + minute + " " + day + "-" + month + "-" + year;
    return formatted_date;
  };

  const fetchComment = async () => {
    const res = await fetchJSON(`/api/comment/${param}`, {
      method: "GET",
    });
    setAllComment(res);
  };

  useEffect(() => {
    const pusher = new Pusher("445ee293670f7b1800e0", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("my-exercise");
    channel.bind("send-comment", (data: any) => {
      console.log(data.body);
      if (data.body.idNote === +param)
        setAllComment((prev) => [...prev, data.body]);
    });
    return () => {
      pusher.disconnect();
    };
  }, []);

  useEffect(() => {
    fetchComment();
  }, []);
  return (
    <>
      {allComment.map((comment) => (
        <>
          <div className="flex justify-start items-center">
            <div className="w-[22px] h-[22px] rounded-full border border-slate-200 shadow-lg text-center ">
              <p className="text-[13px] text-slate-400">
                {comment.user.name.charAt(0)}
              </p>
            </div>
            <div className="text-[14px] text-[#37352F] leading-[21px] font-[600] mx-[7px]">
              {comment.user.name}
            </div>
            <div className="text-xs leading-[16px] opacity-55">
              {fomatDate(comment.sentAt)}
            </div>
          </div>
          <div className="pl-[29px] text-[14px] text-[#37352F] leading-[21px]">
            <span>{comment.comment}</span>
          </div>
        </>
      ))}
    </>
  );
};

export default Comments;
