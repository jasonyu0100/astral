import { useState } from 'react';
import { ShareContainer } from './container/main';
import { SeaMain } from './main/main';
import { ShareStory } from './main/core/main';
import { ShareSidebar } from './sidebar/main';
import { SharePoint } from './sidebar/point/main';

export function ShareView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <ShareContainer>
      <SeaMain>
        <ShareStory />
      </SeaMain>
      <ShareSidebar>
      </ShareSidebar>
    </ShareContainer>
  );
}
