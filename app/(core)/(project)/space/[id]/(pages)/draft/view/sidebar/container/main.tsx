import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';

export function SpaceDraftSidebarContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={SpaceDraftSidebarContainer.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      borderFx={borderFx['border-l']}
      glassFx={glassFx['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
