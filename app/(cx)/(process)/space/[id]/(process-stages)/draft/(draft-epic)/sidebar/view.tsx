import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { DraftSidebarBody } from './modes/main';
import { DraftSidebarHeader } from './header/main';

export function DraftSidebarView() {
  return (
    <GlassContainer
      displayName={DraftSidebarView.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glassStyle={backgroundStyles['glass-10']}
    >
      <DraftSidebarHeader />
      <DraftSidebarBody />
    </GlassContainer>
  );
}
