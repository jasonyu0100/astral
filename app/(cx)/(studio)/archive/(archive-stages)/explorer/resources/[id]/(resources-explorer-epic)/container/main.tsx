import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';

export function ResourcesContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ResourcesContainer.name}
      size='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glass={glassStyles['glass-5']}
      rounded={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
