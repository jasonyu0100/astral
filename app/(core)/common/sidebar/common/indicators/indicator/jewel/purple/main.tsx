import { effectFx } from '@/style/data';
import { ctwn } from '@/utils/cn';

export function CommonIndicatorPurpleJewel({ active }: { active: boolean }) {
  return (
    <div
      id={CommonIndicatorPurpleJewel.name}
      className={ctwn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-fuchsia-700 to-fuchsia-900',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
