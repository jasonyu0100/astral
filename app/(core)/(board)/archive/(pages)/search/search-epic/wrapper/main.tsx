import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(style)/data';

export function SearchWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SearchWrapper.name}
      sizeFx='w-full h-full'
      className={`${containerFx.row}`}
    >
      {children}
    </GlassAreaContainer>
  );
}
