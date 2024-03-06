import { useEffect, useRef } from "react";

const useClickOutSide = (trigger: () => void) => {
  const documentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (documentRef.current && !documentRef.current.contains(event.target)) {
        trigger();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { documentRef };
};

export default useClickOutSide;
