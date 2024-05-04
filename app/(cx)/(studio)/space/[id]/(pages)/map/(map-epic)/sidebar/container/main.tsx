import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { glassFx, containerFx } from '@/(fx)/data';

export function MapSidebarContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={MapSidebarContainer.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
