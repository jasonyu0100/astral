import { useState } from 'react';
import { ShareContainer } from './container/main';
import { SeaSidebar } from './sidebar/main';
import { MonthView } from './main/month/main';
import { SidebarEntry } from './sidebar/entry/main';
import { SeaContribution } from './main/contribution/main';
import { SeaMain } from './main/main';

export function ShareView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <ShareContainer>
      <SeaSidebar>
        <SidebarEntry>Week 1</SidebarEntry>
        <SidebarEntry>Week 2</SidebarEntry>
        <SidebarEntry>Week 3</SidebarEntry>
        <SidebarEntry>Week 4</SidebarEntry>
        <SidebarEntry>Week 5</SidebarEntry>
      </SeaSidebar>
      <SeaMain>
        <MonthView />
        <div className='flex max-w-[800px] flex-col items-center space-y-[2rem] overflow-auto'>
          <SeaContribution />
          <SeaContribution />
          <SeaContribution />
          <SeaContribution />
        </div>
      </SeaMain>
    </ShareContainer>
  );
}
