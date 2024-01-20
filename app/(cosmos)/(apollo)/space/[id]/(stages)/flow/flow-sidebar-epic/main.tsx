import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import React, { useContext } from 'react';
import { FlowContext } from '../page';
import { FlowSidebarColumn } from './column/main';
import { FlowSidebarEntry } from './column/section/entry/main';
import { FlowSidebarSection } from './column/section/main';
import { FlowSidebarHeader } from './header/main';

export function FlowSidebar() {
  const { moments } = useContext(FlowContext);
  return (
    <Layer
      displayName={FlowSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} px-[1rem] space-y-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <FlowSidebarHeader/>
      <FlowSidebarColumn>
        <FlowSidebarSection>
          {moments.map((moment) => (
            <FlowSidebarEntry moment={moment} />
          ))}
        </FlowSidebarSection>
      </FlowSidebarColumn>
    </Layer>
  );
}
