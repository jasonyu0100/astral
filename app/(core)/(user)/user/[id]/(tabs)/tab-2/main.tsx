'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { userProfileMap } from '../../map';
import { UserTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const userObj = useContext(ContextForUserObj);
  const tabText = UserTabStage.Gallerys;
  const active = tab === tabText;

  return (
    <Tab href={userProfileMap.gallerys.link(userObj.id)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
