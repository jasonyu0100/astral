import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';

export function SpaceFlowSidebarAdd({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name='temp'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='flex- flex p-[1rem]'
    >
      <GlassWindowContents
        className='flex cursor-pointer flex-col'
        onClick={onClick}
      >
        <p className='text-xl font-bold text-slate-300'>New Comment</p>
        <p className='font-bold text-slate-500'>What do you think?</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
