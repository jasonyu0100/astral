import { ctwn } from '@/utils/cn';

export function TabRedShard({ active }: { active: boolean }) {
  return (
    <div
      className={ctwn(
        'h-1 w-[9rem] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
        {
          'opacity-0': !active,
          [`animate-activate opacity-100`]: active,
        },
      )}
    />
  );
}
