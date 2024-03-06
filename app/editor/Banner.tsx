import React from "react";
const Banner = () => {
  return (
    <div className="group w-full h-[180px] relative ">
      <img
        src="/img/webb1.jpg"
        alt="Image"
        className="w-full h-full object-cover"
      />
      <div className=" w-auto h-[25px] rounded-[5px] opacity-0 group-hover:opacity-100 transition duration-300 flex bg-[#ffff]  absolute top-[20px] right-[15%]">
        <button className="hover:bg-slate-200 text-[13px] px-[4px] rounded-l-[5px] border-r border-r-slate-200 text-slate-500 leading-[21px] font-[500]">
          Change cover
        </button>
        <button className="hover:bg-slate-200 text-[13px] px-[4px] rounded-r-[5px] text-slate-500 leading-[21px] font-[500]">
          Reposition
        </button>
      </div>
      <div
        title="Change Icon"
        role="button"
        className="w-[78px] h-[78px] absolute bottom-[-39px] left-[150px]"
      >
        <img src="/svg/emoji.svg" alt="Icon" />
      </div>
    </div>
  );
};

export default Banner;
