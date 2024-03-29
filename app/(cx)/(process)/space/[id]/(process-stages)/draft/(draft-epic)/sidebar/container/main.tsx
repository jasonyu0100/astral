import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(design)/(fx)/data';

export function DraftSidebarContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={DraftSidebarContainer.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] px-[1rem]`}
      glassFx={glassFx['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
