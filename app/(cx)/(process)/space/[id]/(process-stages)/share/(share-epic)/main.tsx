import { containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function ShareContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ShareContainer.name}
      size='h-full flex-grow'
      className={`${containerStyles['row-center']}`}
      rounded={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
