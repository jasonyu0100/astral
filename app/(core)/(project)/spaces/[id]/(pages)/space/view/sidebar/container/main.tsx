import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';

export function SpacesSpaceSidebarContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={SpacesSpaceSidebarContainer.name}
      sizeFx='w-[360px] h-full overflow-hidden'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
