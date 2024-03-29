import { useState } from 'react';
import { ShareWrapper } from './container/main';
import { ShareContainer } from './main/main';
import { ShareStory } from './main/core/main';
import { ShareSidebar } from './sidebar/main';
import { SharePoint } from './sidebar/point/main';

export function ShareView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <ShareWrapper>
      <ShareContainer>
        <ShareStory />
      </ShareContainer>
      <ShareSidebar>
        {/* <div
          className='flex w-full flex-col overflow-auto'
          style={{ height: '100%' }}
        >
          <SharePoint>Test</SharePoint>
          <SharePoint>Test</SharePoint>
          <SharePoint>Test</SharePoint>
          <SharePoint>Test</SharePoint>
          <SharePoint>Test</SharePoint>
          <SharePoint>Test</SharePoint>
          <SharePoint>Test</SharePoint>
        </div> */}
      </ShareSidebar>
    </ShareWrapper>
  );
}
