import { useState } from 'react';
import { SeaWrapper } from './sea-epic/wrapper/main';
import { SeaMain } from './sea-epic/main';
import { SeaStory } from './sea-epic/story/main';
import { SeaSidebar } from './sea-sidebar-epic/main';
import { SeaPoint } from './sea-sidebar-epic/point/main';

export function SeaView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <SeaWrapper>
      <SeaMain>
        <SeaStory />
      </SeaMain>
      <SeaSidebar>
        <div
          className='flex w-full flex-col overflow-auto'
          style={{ height: '100%' }}
        >
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
        </div>
      </SeaSidebar>
    </SeaWrapper>
  );
}
