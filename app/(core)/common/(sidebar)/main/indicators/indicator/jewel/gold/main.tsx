import { effectFx } from '@/style/data';
import { cn } from '@/utils/cn';

export function IndicatorGoldJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorGoldJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
