import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  roundedFx,
  borderFx,
} from '@/(style)/data';

export function GallerysContainer({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={GallerysContainer.name}
      sizeFx='flex-grow h-full'
      className={`"flex flex-col"`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container']}
    >
        {children}
    </GlassAreaContainer>
  );
}
