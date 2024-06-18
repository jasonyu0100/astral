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
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full overflow-hidden'
      className={`flex flex-col`}
      borderFx={borderFx['border-l']}
      glassFx={glassFx['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
