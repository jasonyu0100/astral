import { glassFx, containerFx, roundedFx, borderFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';

export function UpdatesContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={UpdatesContainer.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['row']}`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
