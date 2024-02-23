'use client';

import { Tab } from '@/(components)/cx/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/(components)/cx/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/(components)/cx/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabFour({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Sea;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.sea.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
