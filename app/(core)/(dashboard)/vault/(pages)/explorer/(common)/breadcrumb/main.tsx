import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';

export function ArchiveExplorerBreadcrumbs({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={ArchiveExplorerBreadcrumbs.name}
      className={'w-full flex-shrink-0 pb-[1rem]'}
    >
      <GlassWindowContents className='flex w-full flex-row items-center space-x-[1rem]'>
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
