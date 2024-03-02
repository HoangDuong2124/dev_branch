import React from 'react'

const Editor = () => {
  return (
    <div className='w-full h-screen '>
        <div className='title w-full p-3 sticky top-0 flex justify-between items-center bg-[#ffff] ' >
        <p className="ml-2 text-[14px] text-black font-[500]">Untitled</p>
        <button
          title="Style, export, and more..."
          className="w-[30px] h-[30px] flex justify-center items-center  rounded-[5px]  hover:bg-slate-300 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-[20px] h-[20px] fill-slate-500"
          >
            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
          </svg>
        </button>
        </div>
        <div></div>
        <div className='w-full grid grid-cols-[]'>
            
        </div>
    </div>
  )
}

export default Editor