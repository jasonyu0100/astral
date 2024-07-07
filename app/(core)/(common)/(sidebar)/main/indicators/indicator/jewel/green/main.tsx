import { effectFx } from '@/(style)/data';
import { cn } from '@/(utils)/cn';

export function IndicatorGreenJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorGreenJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full  bg-gradient-to-br from-amber-300 to-emerald-400',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-80']: !active,
        },
      )}
    />
  );
}
