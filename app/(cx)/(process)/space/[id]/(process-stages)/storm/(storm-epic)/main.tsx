import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function StormContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={StormContainer.name}
      sizeStyle='h-full flex-grow'
      glassStyle={glassStyles['glass-5']}
      className={`${containerStyles['row']}`}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
