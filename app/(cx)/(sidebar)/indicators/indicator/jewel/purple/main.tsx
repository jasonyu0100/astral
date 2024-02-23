import { effectStyles } from '@/(components)/styles/data';
import { cn } from '@/(logic)/utils/cn';

export function IndicatorPurpleJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorPurpleJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-fuchsia-700 to-fuchsia-900',
        {
          [`${effectStyles['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
