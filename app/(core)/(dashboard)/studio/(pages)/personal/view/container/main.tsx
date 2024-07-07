import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function StudioSpacesContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={StudioSpacesContainer.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-10']}
      roundedFx={roundedFx['rounded-container']}
      className='flex flex-col'
    >
      {children}
    </GlassAreaContainer>
  );
}
