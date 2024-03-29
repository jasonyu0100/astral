import { containerFx, roundedFx } from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function ShareContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ShareContainer.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['row-center']}`}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
