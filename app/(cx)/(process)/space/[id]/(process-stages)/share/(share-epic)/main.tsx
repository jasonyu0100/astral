import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function ShareMain({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={ShareMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row-center']}`}
    >
      {children}
    </GlassContainer>
  );
}
