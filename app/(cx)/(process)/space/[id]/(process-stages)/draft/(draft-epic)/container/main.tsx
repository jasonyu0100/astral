import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';

export function DraftContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={DraftContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
