'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spaceMap } from '../../map';
import { SpaceTabStage } from '../main';

export function SpaceTabJourney({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Journey;
  const active = tab === tabText;

  // Safely check if the necessary context values are available
  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spaceMap.space.id.journey.link(spaceId)}?chapter=${chapterId ?? ''}`
    : '#'; // Fallback URL if spaceId is undefined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
