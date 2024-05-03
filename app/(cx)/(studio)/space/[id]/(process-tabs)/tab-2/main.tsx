'use client';

import { Tab } from '@/(pkgs)/(core)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/(pkgs)/(core)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/(pkgs)/(core)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Map;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.map.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
