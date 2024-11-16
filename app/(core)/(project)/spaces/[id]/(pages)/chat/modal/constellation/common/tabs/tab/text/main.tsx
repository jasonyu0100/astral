import { ctwn } from '@/utils/cn';

export function GenerateTabText({
  children,
  active,
}: {
  children?: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={ctwn(
        'h-[2.3rem] w-[7rem] text-xl font-bold leading-9 text-slate-300',
        {
          'text-slate-400 opacity-50': !active,
          'text-slate-300': active,
        },
      )}
    >
      {children}
    </div>
  );
}
