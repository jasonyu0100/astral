import { effectStyles } from '@/(common)/styles/data';
import { cn } from '@/utils/cn';

export function IndicatorOrangeJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorOrangeJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-red-500 to-amber-300',
        {
          [`${effectStyles['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
