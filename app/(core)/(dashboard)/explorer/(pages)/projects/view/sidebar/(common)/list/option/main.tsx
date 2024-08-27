import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

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
      <p className='text-lg font-bold text-slate-300'>{children}</p>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
