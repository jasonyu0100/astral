'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/controller/gallery/collection/resource/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/controller/gallery/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSceneConversationList,
  useControllerForSceneConversationList,
} from '@/(server)/controller/space/chapter/scene/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/controller/space/chapter/scene/idea/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/controller/space/chapter/scene/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import {
  ContextForSpacesMapChat,
  useControllerForSpacesMapChat,
} from './controller/chat/main';
import {
  ContextForSpacesMap,
  useControllerForSpacesMap,
} from './controller/main';
import { SpacesMapModals } from './modal/controller/main';
import { SpacesMapView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const sceneId = searchParams.get('scene');
  const chapterId = searchParams.get('chapter');

  const spaceMainController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
    chapterId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
    sceneId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(
    user?.id,
    spaceMainController.state.obj.galleryId,
  );
  const collectionListController = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
    spaceMainController.state.obj.collectionId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  const conversationListController = useControllerForSceneConversationList(
    sceneListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterSceneList.Provider value={sceneListController}>
            <ContextForSceneIdeaList.Provider value={ideaListController}>
              <ContextForGalleryList.Provider value={galleryListController}>
                <ContextForGalleryCollectionList.Provider
                  value={collectionListController}
                >
                  <ContextForCollectionResourceList.Provider
                    value={resourceListController}
                  >
                    <ContextForSceneConversationList.Provider
                      value={conversationListController}
                    >
                      <ContextForConversationMessageList.Provider
                        value={messageListController}
                      >
                        <LoadingWrapper>
                          <SpacesMapControllerWrapper>
                            <SpacesMapModals>
                              <SpacesMapView />
                            </SpacesMapModals>
                          </SpacesMapControllerWrapper>
                        </LoadingWrapper>
                      </ContextForConversationMessageList.Provider>
                    </ContextForSceneConversationList.Provider>
                  </ContextForCollectionResourceList.Provider>
                </ContextForGalleryCollectionList.Provider>
              </ContextForGalleryList.Provider>
            </ContextForSceneIdeaList.Provider>
          </ContextForChapterSceneList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function SpacesMapControllerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const mapController = useControllerForSpacesMap();
  const mapChatController = useControllerForSpacesMapChat();

  return (
    <ContextForSpacesMap.Provider value={mapController}>
      <ContextForSpacesMapChat.Provider value={mapChatController}>
        {children}
      </ContextForSpacesMapChat.Provider>
    </ContextForSpacesMap.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
