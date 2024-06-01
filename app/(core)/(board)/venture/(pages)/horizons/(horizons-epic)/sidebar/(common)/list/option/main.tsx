import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';

export function HorizonsSidebarOption({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={HorizonsSidebarOption.name}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx.rounded}
      className='px-[1rem] py-[0.5rem]'
    >
      <p className='text-lg font-bold text-slate-300'>{children}</p>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
