import { effectFx } from '@/style/data';
import { ctwn } from '@/utils/cn';

export function CommonIndicatorGreenJewel({ active }: { active: boolean }) {
  return (
    <div
      id={CommonIndicatorGreenJewel.name}
      className={ctwn(
        'h-[2.5rem] w-[2.5rem] rounded-full  bg-gradient-to-br from-amber-300 to-emerald-400',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
