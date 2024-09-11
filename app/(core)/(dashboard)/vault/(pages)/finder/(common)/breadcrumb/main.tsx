import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function ArchiveExplorerBreadcrumbs({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={ArchiveExplorerBreadcrumbs.name}
      className={'h-[4rem] w-full flex-shrink-0'}
    >
      <GlassWindowContents className='flex h-full w-full flex-row items-center space-x-[1rem] pb-[1rem]'>
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
