import { useState } from 'react';
import { SeaWrapper } from './sea-epic/wrapper/main';
import { SeaMain } from './sea-epic/main';
import { SeaStory } from './sea-epic/story/main';
import { SeaSidebar } from './sidebar/main';
import { SeaPoint } from './sidebar/point/main';

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
