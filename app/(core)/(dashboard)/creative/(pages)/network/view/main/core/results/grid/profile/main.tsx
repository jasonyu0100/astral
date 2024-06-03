'use client';

import { FileObj } from "@/(model)/resource/file/main";
import { cn } from "@/(utils)/cn";

export function CreativeProfile({ result, index } : { result: FileObj, index: number }) {
  return (
    <div
      className={cn(
        'mb-[20px] flex aspect-[13/16] h-[200px] flex-shrink-0 flex-col items-center bg-white p-[20px] pb-[0px]',
        {
          'mt-[20px]': index % 2 === 0,
          'ml-[25px]': index % 2 === 1,
          'mr-[33px]': index % 3 === 1,
          'rotate-1': index % 4 === 1,
          'rotate-[-1]': index % 5 === 1,
        },
      )}
    >
      <img className='aspect-square w-full bg-black' src={result?.src} />
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <p className='w-full text-center text-xl font-bold text-black'>
          {result.title}
        </p>
      </div>
    </div>
  );
}
