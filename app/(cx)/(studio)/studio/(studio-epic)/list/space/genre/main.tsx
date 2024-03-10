'use client';

import { useContext } from "react";
import { CreativeSpaceContext } from "../main";

export function SpaceGenre() {
  const { space } = useContext(CreativeSpaceContext);

  return (
    <div className='flex items-center w-[150px]'>
      <p className='text-lg font-bold text-white'>{space.variant}</p>
    </div>
  );
}
