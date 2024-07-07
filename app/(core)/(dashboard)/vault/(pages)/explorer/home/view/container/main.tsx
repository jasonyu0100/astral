import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function ExplorerHomeGallerysContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={ExplorerHomeGallerysContainer.name}
      sizeFx='flex-grow h-full'
      className={`"flex flex-col"`}
      glassFx={glassFx['glass-10']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
