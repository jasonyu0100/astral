import { glassFx, containerFx, roundedFx, borderFx } from '@/(style)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

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
