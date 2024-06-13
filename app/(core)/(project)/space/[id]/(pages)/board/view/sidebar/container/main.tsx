import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';

export function BoardSidebarContainer({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={BoardSidebarContainer.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
