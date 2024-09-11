import { cn } from '@/utils/cn';

export function UserProfileTextTab({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className='flex w-full cursor-pointer flex-row items-center justify-center'
      onClick={onClick}
    >
      <p
        className={cn('font-bold text-slate-500', {
          'text-slate-300': active,
        })}
      >
        {children}
      </p>
    </div>
  );
}
