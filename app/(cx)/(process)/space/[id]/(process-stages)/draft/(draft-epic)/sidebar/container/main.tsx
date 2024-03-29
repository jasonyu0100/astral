import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';

export function DraftSidebarContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={DraftSidebarContainer.name}
      size='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glass={glassStyles['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
