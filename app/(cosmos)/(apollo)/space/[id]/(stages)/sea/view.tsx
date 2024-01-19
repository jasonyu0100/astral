import { useState } from 'react';
import { SeaWrapper } from './sea-epic/wrapper/main';

export function SeaView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <SeaWrapper>
      {/* <SeaMain>
        <SeaStory />
      </SeaMain>
      <SeaSidebar>
        <div
          className="flex flex-col w-full overflow-auto"
          style={{ height: "100%" }}
        >
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
        </div>
      </SeaSidebar> */}
    </SeaWrapper>
  );
}
