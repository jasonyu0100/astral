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
      className={ctwn('h-[2.5rem] w-[7rem] text-2xl font-bold text-slate-300', {
        'animate-pulse-slow text-slate-500': !active,
        'animate-pulse text-slate-300': active,
      })}
    >
      {children}
    </div>
  );
}
