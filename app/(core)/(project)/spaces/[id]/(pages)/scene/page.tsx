'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { portalMap } from '@/(portal)/map';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/server/controller/activity/list-from-chapter';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/server/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/server/controller/conversation/message/list';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/server/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/server/controller/gallery/collection/resource/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/server/controller/gallery/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/server/controller/idea/list';
import {
  ContextForIdeaRelationshipListFromScene,
  useControllerForIdeaRelationshipListFromScene,
} from '@/server/controller/idea/relationship/list-from-scene';
import {
  ContextForIdeaSceneList,
  useControllerForIdeaSceneList,
} from '@/server/controller/scene/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/server/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/server/controller/space/main';
import {
  ContextForSpaceMemberList,
  useControllerForSpaceMemberList,
} from '@/server/controller/space/member/list';
import {
  ContextForTaskList,
  useControllerForTaskList,
} from '@/server/controller/task/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/server/controller/user/main';
import {
  ContextForSpaceVisibility,
  SpaceVisibility,
} from '@/server/model/space/main';
import {
  ContextForLoggedInUserObj,
  ContextForUserPageRole,
  ContextForUserProfileVisibility,
  UserPageRole,
  UserProfileVisibility,
} from '@/server/model/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpacesSidebar } from '../../../sidebar/main';
import { SpacesSidebarModals } from '../../../sidebar/modal/controller/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpacesSceneChat,
  useControllerForSpacesSceneChat,
} from './controller/chat/main';
import {
  ContextForSpacesScene,
  useControllerForSpacesScene,
} from './controller/main';
import { SpacesSceneModals } from './modal/controller/main';
import { SpacesSceneView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const sceneId = searchParams.get('scene');
  const chapterId = searchParams.get('chapter');

  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceMainController = useControllerForSpaceMain(params.id);
  const spaceMemberListController = useControllerForSpaceMemberList(
    spaceMainController.state.objId,
  );
  const userMainController = useControllerForUserMain(
    spaceMainController.state.obj.userId,
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
  const galleryListController = useControllerForGalleryList(loggedInUser?.id);
  const collectionListController = useControllerForGalleryCollectionList(
    loggedInUser.journalId,
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

  const taskListController = useControllerForTaskList(
    chapterListController.state.objId,
  );
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForUserMain.Provider value={userMainController}>
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
                              <ContextForTaskList.Provider
                                value={taskListController}
                              >
                                <ContextForUserActivityListFromChapter.Provider
                                  value={activityListController}
                                >
                                  <PermissionWrapper>
                                    <RedirectWrapper>
                                      <UpdateWrapper>
                                        <LoadingWrapper>
                                          <ControllerWrapper>
                                            <ModalWrapper>
                                              <ViewWrapper>
                                                <SpacesSceneView />
                                              </ViewWrapper>
                                            </ModalWrapper>
                                          </ControllerWrapper>
                                        </LoadingWrapper>
                                      </UpdateWrapper>
                                    </RedirectWrapper>
                                  </PermissionWrapper>
                                </ContextForUserActivityListFromChapter.Provider>
                              </ContextForTaskList.Provider>
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
        </ContextForUserMain.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function PermissionWrapper({ children }: { children: React.ReactNode }) {
  const spaceMainController = useContext(ContextForSpaceMain);
  const userMainController = useContext(ContextForUserMain);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spaceMemberListController = useContext(ContextForSpaceMemberList);

  const isOwner = loggedInUser?.id === spaceMainController.state.obj.userId;
  const isMember = spaceMemberListController.state.objs.some(
    (member) => member.userId === loggedInUser?.id,
  );

  const pageRole = isOwner
    ? UserPageRole.OWNER
    : isMember
      ? UserPageRole.MEMBER
      : spaceMainController.state.obj.visibility === SpaceVisibility.PUBLIC
        ? UserPageRole.VIEWER
        : UserPageRole.NONE;

  return (
    <>
      <ContextForUserPageRole.Provider value={pageRole}>
        <ContextForSpaceVisibility.Provider
          value={spaceMainController.state.obj.visibility as SpaceVisibility}
        >
          <ContextForUserProfileVisibility.Provider
            value={
              userMainController.state.obj.visibility as UserProfileVisibility
            }
          >
            {children}
          </ContextForUserProfileVisibility.Provider>
        </ContextForSpaceVisibility.Provider>
      </ContextForUserPageRole.Provider>
    </>
  );
}

function RedirectWrapper({ children }: { children: React.ReactNode }) {
  const pageRole = useContext(ContextForUserPageRole);
  const userMainController = useContext(ContextForUserMain);

  useEffect(() => {
    if (userMainController.state.objId) {
      if (pageRole === UserPageRole.NONE) {
        window.location.href = portalMap.portal.register.link;
      } else if (pageRole === UserPageRole.VIEWER) {
        window.location.href = portalMap.portal.login.link;
      }
    }
  }, [userMainController.state.objId, pageRole]);

  return <>{children}</>;
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesSceneModals>{children}</SpacesSceneModals>
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
  const mapController = useControllerForSpacesScene();
  const chatController = useControllerForSpacesSceneChat();

  return (
    <ContextForSpacesScene.Provider value={mapController}>
      <ContextForSpacesSceneChat.Provider value={chatController}>
        {children}
      </ContextForSpacesSceneChat.Provider>
    </ContextForSpacesScene.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardContainer fullHeight>
      <SpacesSidebarModals>
        <SpacesSidebar />
        <DashboardContent>
          <SpaceTabs tab={SpaceTabStage.Scene} />
          <DashboardBody>{children}</DashboardBody>
        </DashboardContent>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default PrivateAstralPage(Page);
