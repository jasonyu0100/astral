import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  containerFx,
  roundedFx,
} from '@/(design)/(fx)/data';

export function ResourcesContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ResourcesContainer.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glassFx={glassFx['glass-5']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
