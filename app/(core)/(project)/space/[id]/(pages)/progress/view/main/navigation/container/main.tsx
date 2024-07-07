import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';

export function NavigationTimelineContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={NavigationTimelineContainer.name}
      sizeFx='w-full h-[80px]'
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
      glassFx={glassFx['glass-10']}
      borderFx={borderFx['border-t']}
    >
      {children}
    </GlassAreaContainer>
  );
}
