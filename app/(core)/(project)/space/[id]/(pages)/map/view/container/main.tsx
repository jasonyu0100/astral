import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, roundedFx, borderFx } from '@/(style)/data';

export function MapContainer({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={MapContainer.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
