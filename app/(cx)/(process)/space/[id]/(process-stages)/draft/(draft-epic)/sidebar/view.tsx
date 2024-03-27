import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { DraftSidebarBody } from './modes/main';
import { DraftSidebarHeader } from './header/main';

export function DraftSidebarView() {
  return (
    <GlassAreaContainer
      displayName={DraftSidebarView.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glassStyle={glassStyles['glass-10']}
    >
      <DraftSidebarHeader />
      <DraftSidebarBody />
    </GlassAreaContainer>
  );
}
