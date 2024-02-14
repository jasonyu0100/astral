import { useContext } from "react";
import { StarContext } from "@/(ouros)/(model)/draft/constellation/star/main";

export function FileStar() {
  const star = useContext(StarContext);
  return (
    <>
      <img
        className='pointer-events-none aspect-square h-[100px] w-[100px] flex-shrink-0 rounded-full border-[2px] border-slate-300'
        src={star?.file?.src}
      />
      <div className='flex h-[50px] items-center'>
        <p className='w-full text-center font-bold text-slate-300'>
          {star.title} {star.variant} {star.file?.variant}
        </p>
      </div>
    </>
  );
}
