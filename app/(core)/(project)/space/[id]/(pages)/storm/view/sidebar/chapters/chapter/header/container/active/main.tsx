import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceStormSidebarChapter } from '../../../main';

export function SpaceStormContainerActive({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={SpaceStormSidebarChapter.name}
      className='mb-[1rem]'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-sm']}
    >
      <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
