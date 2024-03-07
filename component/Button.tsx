import { useAppContext } from "@/app/provider/theme";
import { FileSVG, ThreeDotSVG } from "./svg";
export const ButtonSidebar = ({
  path: IconComponent,
  name,
}: {
  path: React.ComponentType;
  name: string;
}) => {
  return (
    <button className="w-full flex items-center rounded-[5px] p-2 hover:bg-slate-200">
      {IconComponent && <IconComponent />}
      <div className="ml-[14px] text-[14px] text-slate-500 leading-[21px] font-[500]">
        {name}
      </div>
    </button>
  );
};

export const ButtonNote = () => {
  const { title, icon, setTitle } = useAppContext();
  return (
    <button className="group-hover:group-hover w-full flex  items-center rounded-[5px]  p-2 hover:bg-slate-200 relative">
      {icon ? (
        <img src={`/img/svg/${icon}`} alt="" className="w-[18px] h-[18px]" />
      ) : (
        <FileSVG />
      )}
      <p className="ml-2 text-[14px] w-[70%] text-start text-black overflow-hidden text-ellipsis font-[500]">
        {title ? title : "Untitled"}
      </p>
      <div
        title="Delete, Rename, and more..."
        className="w-[25px] h-[20px] flex justify-center items-center  rounded-[5px]  hover:bg-slate-300 absolute right-2"
      >
        <ThreeDotSVG />
      </div>
    </button>
  );
};

export const ButtonEditor = ({
  path: IconComponent,
  name,
  onClick,
}: {
  path: React.ComponentType;
  name: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-auto flex items-center rounded-[5px] px-2 py-1 hover:bg-slate-200"
    >
      {IconComponent && <IconComponent />}
      <div className="ml-[5px] text-[14px] text-slate-500 leading-[21px] font-[500]">
        {name}
      </div>
    </button>
  );
};
