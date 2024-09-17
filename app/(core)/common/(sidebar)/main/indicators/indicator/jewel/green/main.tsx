import { effectFx } from '@/style/data';
import { cn } from '@/utils/cn';
import React from 'react';

export function CommonIndicatorGreenJewel({ active }: { active: boolean }) {
  return (
    <div
      id={CommonIndicatorGreenJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full  bg-gradient-to-br from-amber-300 to-emerald-400',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
