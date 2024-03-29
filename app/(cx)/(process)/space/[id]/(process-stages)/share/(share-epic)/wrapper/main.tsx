import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';

export function ShareWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ShareWrapper.name}
      size='h-full flex-grow'
      className={`${containerStyles['row']}`}
      glass={glassStyles['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
