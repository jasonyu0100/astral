import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function StormContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={StormContainer.name}
      sizeStyle='h-full flex-grow'
      glassStyle={glassStyles['glass-5']}
      className={`${containerStyles['row']}`}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassContainer>
  );
}
