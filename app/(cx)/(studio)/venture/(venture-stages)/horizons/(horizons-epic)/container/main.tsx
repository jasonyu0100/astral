import { glassFx, roundedFx } from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function VentureHorizonsContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={VentureHorizonsContainer.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col overflow-auto`}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
