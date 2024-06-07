'use client';

import { useContext } from "react";
import { ContextForSpaceObj } from "@/(model)/space/main";

export function SpaceGenre() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center w-[150px]'>
      <p className='text-lg font-bold text-slate-300'>{space.category}</p>
    </div>
  );
}
