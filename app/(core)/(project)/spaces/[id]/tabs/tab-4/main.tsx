'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function SpacesTabFlight({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Flight;
  const active = tab === tabText;

  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spaceMap.space.id.flight.link(spaceId)}?chapter=${chapterId ?? ''}`
    : '#'; // Fallback URL if spaceId is undefined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
