import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';

export function SpaceSeaSidebarEntry({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name='temp'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='flex- flex p-[1rem]'
    >
      <GlassWindowContents className='flex flex-col'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
