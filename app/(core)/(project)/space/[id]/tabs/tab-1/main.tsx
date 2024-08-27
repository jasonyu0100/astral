'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Idea;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.idea.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
