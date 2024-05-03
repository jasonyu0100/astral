import {
  glassFx,
  containerFx,
  roundedFx,
  borderFx,
} from '@/(fx)/data';
import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';

export function StudioSpacesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={StudioSpacesContainer.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      className={`overflow-auto ${containerFx.col}`}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
