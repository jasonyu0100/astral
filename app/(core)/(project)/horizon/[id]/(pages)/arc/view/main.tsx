import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function HorizonArcView({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={HorizonArcView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
