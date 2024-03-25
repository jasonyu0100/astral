import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function FeedContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={FeedContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container']}
    >
      {children}
    </GlassContainer>
  );
}
