'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.storm;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.storm.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
