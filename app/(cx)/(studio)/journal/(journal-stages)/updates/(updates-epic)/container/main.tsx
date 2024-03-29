import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function UpdatesContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={UpdatesContainer.name}
      size='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glass={glassStyles['glass-5']}
      rounded={roundedStyles['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
