import { Glass } from '@/(components)/layer/main';
import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import { FlowSidebarColumn } from './column/main';
import { FlowSidebarHeader } from './header/main';

export function FlowSidebar() {
  return (
    <Glass
      displayName={FlowSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <FlowSidebarHeader />
      <FlowSidebarColumn />
    </Glass>
  );
}
