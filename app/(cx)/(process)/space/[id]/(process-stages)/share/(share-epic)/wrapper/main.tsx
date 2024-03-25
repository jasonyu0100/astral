import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';

export function ShareWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={ShareWrapper.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={glassStyles['glass-5']}
    >
      {children}
    </GlassContainer>
  );
}
