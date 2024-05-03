import { borderFx, glassFx, roundedFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';

export function VentureHorizonsContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={VentureHorizonsContainer.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row`}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
