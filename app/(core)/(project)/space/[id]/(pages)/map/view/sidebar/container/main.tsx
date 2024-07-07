import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';

export function SpaceMapSidebarContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={SpaceMapSidebarContainer.name}
      sizeFx='w-[300px] h-full overflow-hidden border-r-[1px] border-slate-300'
      className={`flex flex-col`}
      glassFx={glassFx['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
