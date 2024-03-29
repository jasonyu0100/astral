import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function StormContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={StormContainer.name}
      size='h-full flex-grow'
      glass={glassStyles['glass-5']}
      className={`${containerStyles['row']}`}
      rounded={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
