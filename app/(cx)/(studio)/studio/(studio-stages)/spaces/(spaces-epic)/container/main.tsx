import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function StudioSpacesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={StudioSpacesContainer.name}
      size='h-full flex-grow'
      glass={glassStyles['glass-5']}
      className={`overflow-auto ${containerStyles.col}`}
      rounded={roundedStyles['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
