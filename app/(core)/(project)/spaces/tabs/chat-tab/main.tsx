'use client';

import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { CreativePrivateSpacesContext } from '../../[id]/layout';
import { spacesMap } from '../../[id]/map';
import { SpaceTabStage } from '../main';

export function SpacesTabChat({ tab }: { tab?: string }) {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceContext = useContext(CreativePrivateSpacesContext);
  const tabText = SpaceTabStage.Chat;
  const active = tab === tabText;

  // Safely check if the necessary context values are available
  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;
  const sceneId = sceneListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spacesMap.spaces.id.chat.link(spaceId)}?chapter=${chapterId ?? ''}&scene=${sceneId ?? ''}`
    : '#'; // Fallback URL if spaceId is not defined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
