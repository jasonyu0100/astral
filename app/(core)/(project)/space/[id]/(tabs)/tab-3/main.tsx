'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Progress;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.progress.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
