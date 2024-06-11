import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { glassFx } from '@/(style)/data';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';

export function JournalHeaderContents({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame className='h-full w-full'>
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[2rem] p-[1rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
