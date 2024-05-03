import { containerFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';

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
