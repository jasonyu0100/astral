'use client';

import { Tab } from '@/(cosmos)/(common)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/(cosmos)/(common)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/(cosmos)/(common)/tabs/tabs-row/tab/text/main';
import { SpaceContext } from '../../layout';
import { useContext } from 'react';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const spaceContext = useContext(SpaceContext);
  const tabText = SpaceTabStage.Flow;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.flow.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
