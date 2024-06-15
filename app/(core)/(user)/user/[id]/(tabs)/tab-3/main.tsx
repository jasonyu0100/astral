'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { userProfileMap } from '../../map';
import { UserTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const userObj = useContext(ContextForUserObj);
  const tabText = UserTabStage.Spaces;
  const active = tab === tabText;

  return (
    <Tab href={userProfileMap.horizons.link(userObj.id)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
