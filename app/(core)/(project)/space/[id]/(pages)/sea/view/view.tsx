import { useState } from 'react';
import { ShareContainer } from './container/main';
import { SeaMain } from './archive-main/main';
import { ShareSidebar } from './sidebar/main';
import { MonthView } from './month/main';
import { ShareSidebarPoint } from './sidebar/point/main';
import { SeaContribution } from './record/main';

export function ShareView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <ShareContainer>
      <ShareSidebar>
        <ShareSidebarPoint>Week 1</ShareSidebarPoint>
        <ShareSidebarPoint>Week 2</ShareSidebarPoint>
        <ShareSidebarPoint>Week 3</ShareSidebarPoint>
        <ShareSidebarPoint>Week 4</ShareSidebarPoint>
        <ShareSidebarPoint>Week 5</ShareSidebarPoint>
      </ShareSidebar>
      <SeaMain>
        <MonthView />
        <div className='flex flex-col overflow-auto max-w-[800px] items-center space-y-[2rem]'>
          <SeaContribution />
          <SeaContribution />
          <SeaContribution />
          <SeaContribution />
        </div>
      </SeaMain>
    </ShareContainer>
  );
}
