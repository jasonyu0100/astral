'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/(server)/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/(server)/controller/conversation/message/list';
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
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/controller/idea/list';
import {
  ContextForIdeaRelationshipListFromScene,
  useControllerForIdeaRelationshipListFromScene,
} from '@/(server)/controller/idea/relationship/list-from-scene';
import {
  ContextForIdeaSceneList,
  useControllerForIdeaSceneList,
} from '@/(server)/controller/scene/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import {
  ContextForSpaceMemberList,
  useControllerForSpaceMemberList,
} from '@/(server)/controller/space/member/list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpaceSidebar } from '../../../sidebar/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
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
  const spaceMemberListController = useControllerForSpaceMemberList(
    spaceMainController.state.objId,
  );
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
    chapterId,
  );
  const sceneListController = useControllerForIdeaSceneList(
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

  const conversationListController = useControllerForChapterConversationList(
    sceneListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  const ideaRelationshipListController =
    useControllerForIdeaRelationshipListFromScene(
      sceneListController.state.objId,
    );

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForSpaceMemberList.Provider value={spaceMemberListController}>
          <ContextForSpaceChapterList.Provider value={chapterListController}>
            <ContextForIdeaSceneList.Provider value={sceneListController}>
              <ContextForSceneIdeaList.Provider value={ideaListController}>
                <ContextForGalleryList.Provider value={galleryListController}>
                  <ContextForGalleryCollectionList.Provider
                    value={collectionListController}
                  >
                    <ContextForCollectionResourceList.Provider
                      value={resourceListController}
                    >
                      <ContextForChapterConversationList.Provider
                        value={conversationListController}
                      >
                        <ContextForConversationMessageList.Provider
                          value={messageListController}
                        >
                          <ContextForIdeaRelationshipListFromScene.Provider
                            value={ideaRelationshipListController}
                          >
                            <EffectWrapper>
                              <UpdateWrapper>
                                <LoadingWrapper>
                                  <ControllerWrapper>
                                    <ModalWrapper>
                                      <ViewWrapper>
                                        <SpacesMapView />
                                      </ViewWrapper>
                                    </ModalWrapper>
                                  </ControllerWrapper>
                                </LoadingWrapper>
                              </UpdateWrapper>
                            </EffectWrapper>
                          </ContextForIdeaRelationshipListFromScene.Provider>
                        </ContextForConversationMessageList.Provider>
                      </ContextForChapterConversationList.Provider>
                    </ContextForCollectionResourceList.Provider>
                  </ContextForGalleryCollectionList.Provider>
                </ContextForGalleryList.Provider>
              </ContextForSceneIdeaList.Provider>
            </ContextForIdeaSceneList.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMemberList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const user = useGlobalUser((state) => state.user);

  useEffect(() => {
    if (sceneListController.state.objs.length == 0) {
      sceneListController.actions.createActions.createScene(
        'New Scene',
        '',
        'Open-ended',
        user.id,
        chapterListController.state.objId,
      );
    }
  }, [sceneListController.state.objs]);
  return <>{children}</>;
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesMapModals>{children}</SpacesMapModals>
    </>
  );
}

function UpdateWrapper({ children }: { children: React.ReactNode }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const chapterId = chapterListController.state?.objId;
    const sceneId = sceneListController.state?.objId;

    // Get the current search params
    const currentSearchParams = new URLSearchParams(searchParams);

    // Update scene and chapter in the URL if they exist
    if (chapterId) {
      currentSearchParams.set('chapter', chapterId);
    }
    if (sceneId) {
      currentSearchParams.set('scene', sceneId);
    }

    // Update the router to reflect the new search params
    router.replace(`?${currentSearchParams.toString()}`);
  }, [
    chapterListController.state?.objId,
    sceneListController.state?.objId,
    router, // Ensure router is in the dependency array
  ]);

  return <>{children}</>;
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
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

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <SpaceSidebar />
      <DashboardContent>
        <SpaceTabs tab={SpaceTabStage.Map} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardContent>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
