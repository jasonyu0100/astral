import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function FeedContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={FeedContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={backgroundStyles['glass-5']}
    >
      {children}
    </GlassContainer>
  );
}
