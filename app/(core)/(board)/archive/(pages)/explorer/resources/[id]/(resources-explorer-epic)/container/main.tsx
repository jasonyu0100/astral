import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  containerFx,
  roundedFx,
  borderFx,
} from '@/(style)/data';

export function ResourcesContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ResourcesContainer.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['col']} p-[2rem] pb-[0rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
