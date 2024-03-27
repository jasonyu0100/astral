import { containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function ShareContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={ShareContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row-center']}`}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
