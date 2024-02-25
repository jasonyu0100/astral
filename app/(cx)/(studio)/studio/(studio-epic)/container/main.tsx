import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';

export function SpaceContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={SpaceContainer.name}
      sizeStyle='w-full h-full'
      className={`${containerStyles.row}`}
    >
      {children}
    </GlassContainer>
  );
}
