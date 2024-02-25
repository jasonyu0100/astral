import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';

export function DraftContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={DraftContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={backgroundStyles['glass-5']}
    >
      {children}
    </GlassContainer>
  );
}
