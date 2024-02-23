'use client';

import { Tab } from '@/(components)/cx/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/(components)/cx/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/(components)/cx/tabs/tabs-row/tab/text/main';
import { CreativeSpacesContext } from '../../layout';
import { useContext } from 'react';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Flow;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.flow.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
