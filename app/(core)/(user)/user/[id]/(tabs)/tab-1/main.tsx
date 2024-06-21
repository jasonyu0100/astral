'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { userProfileMap } from '../../map';
import { UserTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const userContext = useContext(ContextForProfile);
  const tabText = UserTabStage.profile;
  const active = tab === tabText;

  return (
    <Tab href={userProfileMap.profile.link(userContext.userId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
