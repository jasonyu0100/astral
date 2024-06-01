import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export function CollectionBreadcrumbs({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={CollectionBreadcrumbs.name}
      className={'w-full flex-shrink-0 h-[3rem]'}
    >
      <GlassWindowContents className='flex w-full flex-row items-center space-x-[1rem]'>
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
