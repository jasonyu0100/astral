import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';

export function DriveFinderBreadcrumbs({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={DriveFinderBreadcrumbs.name}
      className={'h-[4rem] w-full flex-shrink-0'}
    >
      <GlassWindowContents className='flex h-full w-full flex-row items-center space-x-[1rem] pb-[1rem]'>
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
