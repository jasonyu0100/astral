import { useState } from 'react';
import { ShareWrapper } from './(share-epic)/wrapper/main';
import { ShareMain } from './(share-epic)/main';
import { ShareStory } from './(share-epic)/story/main';
import { ShareSidebar } from './sidebar/main';
import { SharePoint } from './sidebar/point/main';

export function ShareView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <ShareWrapper>
      <ShareMain>
        <ShareStory />
      </ShareMain>
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
