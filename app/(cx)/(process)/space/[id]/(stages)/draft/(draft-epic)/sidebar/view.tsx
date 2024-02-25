import { Glass } from '@/(components)/(basic)/glass/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { DraftSidebarBody } from './modes/main';
import { DraftSidebarHeader } from './header/main';

export function DraftSidebarView() {
  return (
    <Glass
      displayName={DraftSidebarView.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <DraftSidebarHeader />
      <DraftSidebarBody />
    </Glass>
  );
}
