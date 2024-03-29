import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  containerFx,
  roundedFx,
} from '@/(design)/(fx)/data';

export function GallerysContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={GallerysContainer.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glassFx={glassFx['glass-5']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
        {children}
    </GlassAreaContainer>
  );
}
