import { SpaceSeaContainer } from './container/main';
import { SpaceSeaContribution } from './main/contribution/main';
import { SpaceSeaMain } from './main/main';
import { MonthView } from './main/month/main';
import { SpaceSeaSidebarEntry } from './sidebar/entry/main';
import { SpaceSeaSidebar } from './sidebar/main';

export function SpaceSeaShareView() {
  return (
    <SpaceSeaContainer>
      <SpaceSeaSidebar>
        <SpaceSeaSidebarEntry>Week 1</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 2</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 3</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 4</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 5</SpaceSeaSidebarEntry>
      </SpaceSeaSidebar>
      <SpaceSeaMain>
        <MonthView />
        <div className='flex max-w-[800px] flex-col items-center space-y-[2rem] overflow-auto'>
          <SpaceSeaContribution />
          <SpaceSeaContribution />
          <SpaceSeaContribution />
          <SpaceSeaContribution />
        </div>
      </SpaceSeaMain>
    </SpaceSeaContainer>
  );
}
