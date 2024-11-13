import { effectFx } from '@/style/data';
import { ctwn } from '@/utils/cn';

export function CommonIndicatorSilverJewel({ active }: { active: boolean }) {
  return (
    <div
      id={CommonIndicatorSilverJewel.name}
      className={ctwn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-slate-300 to-slate-600',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
