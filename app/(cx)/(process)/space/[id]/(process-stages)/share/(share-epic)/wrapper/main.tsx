import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';

export function ShareWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={ShareWrapper.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glassStyle={glassStyles['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
