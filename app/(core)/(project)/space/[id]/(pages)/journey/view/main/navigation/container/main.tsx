import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function NavigationTimelineContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={NavigationTimelineContainer.name}
      sizeFx='w-full h-[5rem]'
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
      glassFx={glassFx['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
