'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../layout';
import { spacesMap } from '../../map';
import { SpaceTabStage } from '../main';

export function SpacesTabFlight({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Flight;
  const active = tab === tabText;

  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;
  const spotlightId = spotlightListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spacesMap.spaces.id.flight.link(spaceId)}?chapter=${chapterId ?? ''}&spotlight=${spotlightId ?? ''}`
    : '#'; // Fallback URL if spaceId is undefined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
