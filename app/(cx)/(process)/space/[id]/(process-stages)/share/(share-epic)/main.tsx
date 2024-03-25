import { containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function ShareContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={ShareContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row-center']}`}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassContainer>
  );
}
