import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, borderFx, containerFx } from '@/(design)/(fx)/data';

export function CollectionBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={CollectionBreadcrumbs.name}
      className={`'w-full flex-shrink-0'`}
    >
      <GlassWindowContents className='flex w-full flex-row items-center space-x-[1rem]'>
        {children}
      </GlassWindowContents>
      {/* <GlassWindowPane glassFx={glassFx['glass-5']} /> */}
    </GlassWindowFrame>
  );
}
