import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { glassFx, containerFx, roundedFx, borderFx } from '@/(fx)/data';

export function MapContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={MapContainer.name}
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
