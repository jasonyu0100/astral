import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';

export function SeaWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={SeaWrapper.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={backgroundStyles['glass-5']}
    >
      {children}
    </GlassContainer>
  );
}
