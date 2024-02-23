import { effectStyles } from '@/(components)/styles/data';
import { cn } from '@/(logic)/utils/cn';

export function IndicatorSilverJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorSilverJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-slate-500 to-slate-700',
        {
          [`${effectStyles['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
