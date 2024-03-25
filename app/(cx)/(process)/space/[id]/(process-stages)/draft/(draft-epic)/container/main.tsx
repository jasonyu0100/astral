import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';

export function DraftContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={DraftContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassContainer>
  );
}
