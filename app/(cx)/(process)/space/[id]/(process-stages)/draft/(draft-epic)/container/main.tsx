import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';

export function DraftContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={DraftContainer.name}
      size='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glass={glassStyles['glass-5']}
      rounded={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
