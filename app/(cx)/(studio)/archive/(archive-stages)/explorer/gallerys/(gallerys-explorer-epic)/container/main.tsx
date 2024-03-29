import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';

export function GallerysContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={GallerysContainer.name}
      size='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glass={glassStyles['glass-5']}
      rounded={roundedStyles['rounded-container-sm']}
    >
        {children}
    </GlassAreaContainer>
  );
}
