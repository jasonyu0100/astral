'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { userProfileMap } from '../../map';
import { UserTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const userContext = useContext(ContextForProfile);
  const tabText = UserTabStage.gallerys;
  const active = tab === tabText;

  return (
    <Tab href={userProfileMap.gallerys.link(userContext.userId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
