import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function SpaceProgressList({ children }: { children: React.ReactNode }) {
  return (
    <GlassWindowFrame className='h-full w-full'>
      <GlassWindowContents className='flex flex-col items-center space-y-[1rem] overflow-auto'>
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
