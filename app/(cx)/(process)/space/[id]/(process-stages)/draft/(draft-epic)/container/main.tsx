import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx, roundedFx, borderFx } from '@/(design)/(fx)/data';

export function DraftContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={DraftContainer.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['row']}`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
