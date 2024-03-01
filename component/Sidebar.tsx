export const SidebarLayout = () => {
  return (
    <div className="w-60 h-screen  border-r">
      <div className="w-full border-b sticky top-0">
        <div className="w-full flex justify-center items-center p-2">
          <div
            role="img"
            aria-label="T "
            className="rounded-[0.25em] w-[20px] h-[20px]  bg-[rgba(55, 53, 47, 0.09)] text-[rgba(55, 53, 47, 0.65)] uppercase flex items-center justify-center"
          >
            <div className="leading-[1px] text-[13.431px] h-[13.431px]">T</div>
            <div>Traning</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width={10}
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width={10}
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
        <button className="flex justify-center">
          <div className="w-[10px] rounded-full bg-slate-400  flex justify-center items-end ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={8} >
              <path className="fill-white" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
          <div>New Add</div>
        </button>
    </div>
  );
};
