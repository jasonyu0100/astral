import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonPointSidebar } from './sidebar/main';

export function HorizonPointView({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={HorizonPointView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <HorizonPointSidebar />
      {children}
    </GlassAreaContainer>
  );
}
