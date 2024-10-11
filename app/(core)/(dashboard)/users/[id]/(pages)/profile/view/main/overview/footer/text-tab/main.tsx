import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { ctwn } from '@/utils/cn';

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
    <GlassWindowFrame className='h-full w-full cursor-pointer'>
      <GlassWindowContents
        onClick={onClick}
        className='flex h-full w-full cursor-pointer flex-row items-center justify-center'
      >
        <p
          className={ctwn('text-lg font-bold text-slate-500', {
            'text-slate-300': active,
          })}
        >
          {children}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
