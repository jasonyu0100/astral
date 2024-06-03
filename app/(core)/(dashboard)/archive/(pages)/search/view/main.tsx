import { glassFx, containerFx } from '@/(style)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SearchController({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SearchController.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`${containerFx['col']} space-y-[2rem] p-[2rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}
