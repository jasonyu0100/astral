import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceProgressListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      className='h-[100px] w-full p-[2rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents>
        <p className='font-bold text-slate-300'>Scene 1: {children}</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
