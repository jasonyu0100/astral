import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx, borderFx, roundedFx } from '@/(style)/data';

export function ShareContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ShareContainer.name}
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
