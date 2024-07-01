'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabFour({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Verses;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.verses.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
