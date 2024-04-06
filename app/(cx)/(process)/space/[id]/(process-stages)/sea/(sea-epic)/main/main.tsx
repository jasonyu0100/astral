import { containerFx } from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SeaMain({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SeaMain.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['col']}`}
    >
      {children}
    </GlassAreaContainer>
  );
}
