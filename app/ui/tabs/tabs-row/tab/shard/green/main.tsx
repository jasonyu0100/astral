import { ctwn } from '@/utils/cn';

export function TabGreenShard({ active }: { active: boolean }) {
  return (
    <div
      className={ctwn(
        'h-1 w-[9rem] bg-gradient-to-br from-amber-300 to-emerald-400',
        {
          'opacity-0': !active,
          [`animate-activate opacity-100`]: active,
        },
      )}
    />
  );
}
