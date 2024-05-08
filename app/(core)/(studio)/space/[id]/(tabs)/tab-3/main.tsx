'use client';

import { Tab } from '@/(components)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '@/(components)/(core)/tabs/tabs-row/tab/text/main';
import { CreativeSpacesContext } from '../../layout';
import { useContext } from 'react';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';
import { TabOrangeShard } from '@/(components)/(core)/tabs/tabs-row/tab/shard/orange/main';

export function TabThree({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Draft;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.draft.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
