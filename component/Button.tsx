export const ButtonSidebar = ({path,name}:{path:string,name:string}) =>{
    return(
        <button className="w-full flex items-center rounded-[5px] p-2 hover:bg-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={13}
          height={13}
        >
          <path
            className="fill-slate-500"
            d={path}
          />
        </svg>
        <div className="ml-[14px] text-[14px] text-slate-500 leading-[21px] font-[500]">
          {name}
        </div>
      </button>
    )
}

export const ButtonNote = () =>{
    return(
        <button className="group-hover:group-hover w-full flex  items-center rounded-[5px]  p-2 hover:bg-slate-200 relative">
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="w-[18px] h-[18px] block fill-slate-500 "
        >
          <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path>
        </svg>
        <p className="ml-2 text-[14px] text-black font-[500]">Untitled</p>
        <div
          title="Delete, Rename, and more..."
          className="w-[25px] h-[20px] flex justify-center items-center  rounded-[5px]  hover:bg-slate-300 absolute right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-[15px] h-[15px] fill-slate-500 opacity-0 group-hover:opacity-100"
          >
            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
          </svg>
        </div>
      </button>
    )
}