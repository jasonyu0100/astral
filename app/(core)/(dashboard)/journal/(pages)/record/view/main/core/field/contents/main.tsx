import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';

export function JournalRecordFieldContents({
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
