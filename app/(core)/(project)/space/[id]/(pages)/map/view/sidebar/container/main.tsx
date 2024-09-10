import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function SpaceMapSidebarContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={SpaceMapSidebarContainer.name}
      sizeFx='w-[360px] h-full overflow-hidden'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
