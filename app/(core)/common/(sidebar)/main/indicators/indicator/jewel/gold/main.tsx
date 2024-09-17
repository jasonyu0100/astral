import { effectFx } from '@/style/data';
import { cn } from '@/utils/cn';
import React from 'react';

export function CommonIndicatorGoldJewel({ active }: { active: boolean }) {
  return (
    <div
      id={CommonIndicatorGoldJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-slate-300 to-slate-600',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
