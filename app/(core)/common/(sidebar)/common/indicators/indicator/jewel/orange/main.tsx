import { effectFx } from '@/style/data';
import { cn } from '@/utils/cn';

export function CommonIndicatorOrangeJewel({ active }: { active: boolean }) {
  return (
    <div
      id={CommonIndicatorOrangeJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-red-500 to-amber-300',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
