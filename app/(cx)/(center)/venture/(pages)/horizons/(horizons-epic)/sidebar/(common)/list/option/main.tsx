import { GlassWindowFrame } from '@/(pkgs)/(glass)/window/main';
import { GlassWindowPane } from '@/(pkgs)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(fx)/data';

export function HorizonsSidebarOption({
  children,
}: {
  children: React.ReactNode;
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
