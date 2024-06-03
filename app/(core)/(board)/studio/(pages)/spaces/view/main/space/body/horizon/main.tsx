'use client';

import { useContext } from "react";
import { ExtendedSpaceContext } from "../../main";
import { horizonMap } from "@/(core)/(project)/horizon/[id]/map";

export function SpaceHorizon() {
  const { space } = useContext(ExtendedSpaceContext);

  return (
    <div className='flex items-center w-[150px]'>
      <a href={`${horizonMap.horizon.id.field.link("0")}`} className='text-lg font-bold text-slate-300'>Horizon</a>
    </div>
  );
}
