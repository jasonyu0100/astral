'use client';

import { Tab } from '@/(cosmos)/(common)/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/(cosmos)/(common)/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/(cosmos)/(common)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { SpaceContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabFour({ tab }: { tab?: string }) {
  const spaceContext = useContext(SpaceContext);
  const tabText = SpaceTabStage.Sea;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.sea.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
