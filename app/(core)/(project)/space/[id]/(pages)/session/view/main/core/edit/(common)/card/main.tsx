import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';

export function SpaceSessionEditCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      className='aspect-[9/13] w-[300px] flex-shrink-0'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex flex-col items-center justify-center space-y-[0.5rem] bg-gradient-to-br from-slate-900 to-purple-900'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
