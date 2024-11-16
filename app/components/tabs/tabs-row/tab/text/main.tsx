import { ctwn } from '@/utils/cn';

export function TabText({
  children,
  active,
}: {
  children?: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={ctwn(
        'flex h-[2.5rem] w-[7rem] flex-row space-x-[0.5rem] text-xl font-bold text-slate-300',
        {
          'animate-pulse-slow text-slate-400': !active,
          'animate-pulse text-slate-300': active,
        },
      )}
    >
      {children}
    </div>
  );
}
