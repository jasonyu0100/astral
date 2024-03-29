import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function UpdatesContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={UpdatesContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
