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
        <ShareSidebarPoint>Day 1</ShareSidebarPoint>
        <ShareSidebarPoint>Day 2</ShareSidebarPoint>
        <ShareSidebarPoint>Day 3</ShareSidebarPoint>
        <ShareSidebarPoint>Day 4</ShareSidebarPoint>
        <ShareSidebarPoint>Day 5</ShareSidebarPoint>
      </ShareSidebar>
      <SeaMain>
        <MonthView/>
        <SeaContribution/>
        <SeaContribution/>
        <SeaContribution/>
        <SeaContribution/>
      </SeaMain>
    </ShareContainer>
  );
}
