'use client';

import { Tab } from '@/(pkgs)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '@/(pkgs)/(core)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';
import { TabPurpleShard } from '@/(pkgs)/(core)/tabs/tabs-row/tab/shard/purple/main';

export function TabFour({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Sea;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.sea.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
