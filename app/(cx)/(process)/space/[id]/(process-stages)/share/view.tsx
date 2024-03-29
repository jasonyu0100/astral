import { useState } from 'react';
import { ShareWrapper } from './(share-epic)/container/main';
import { ShareContainer } from './(share-epic)/main/main';
import { ShareStory } from './(share-epic)/main/core/main';
import { ShareSidebar } from './(share-epic)/sidebar/main';
import { SharePoint } from './(share-epic)/sidebar/point/main';

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
