'use client';

import { Tab } from '@/(cosmos)/(common)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/(cosmos)/(common)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/(cosmos)/(common)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Draft;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.draft.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
