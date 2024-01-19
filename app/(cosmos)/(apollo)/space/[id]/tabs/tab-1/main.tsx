'use client';

import { Tab } from '@/(cosmos)/(common)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/(cosmos)/(common)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/(cosmos)/(common)/tabs/tabs-row/tab/text/main';
import { spaceMap } from '../../map';
import { CreativeSpacesContext } from '../../layout';
import { useContext } from 'react';
import { SpaceTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Storm;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.storm.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
