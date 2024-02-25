import { effectStyles } from '@/(design)/(styles)/data';
import { cn } from '@/(logic)/utils/cn';

export function IndicatorGreenJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorGreenJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full  bg-gradient-to-br from-amber-300 to-emerald-400',
        {
          [`${effectStyles['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
