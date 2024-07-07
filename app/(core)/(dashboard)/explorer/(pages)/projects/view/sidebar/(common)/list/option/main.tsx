import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';

export function VentureHorizonsSidebarOption({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={VentureHorizonsSidebarOption.name}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='px-[1rem] py-[0.5rem]'
    >
      <p className='text-lg font-bold text-slate-700'>{children}</p>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
