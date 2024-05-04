import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { glassFx, borderFx, containerFx } from '@/(fx)/data';

export function CollectionBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={CollectionBreadcrumbs.name}
      className={'w-full flex-shrink-0 pt-[1rem]'}
    >
      <GlassWindowContents className='flex w-full flex-row items-center space-x-[1rem]'>
        {children}
      </GlassWindowContents>
      {/* <GlassWindowPane glassFx={glassFx['glass-5']} /> */}
    </GlassWindowFrame>
  );
}
