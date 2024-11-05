'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { portalMap } from '@/(portal)/map';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/architecture/controller/activity/list-from-chapter';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/architecture/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/architecture/controller/conversation/message/list';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/architecture/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/architecture/controller/gallery/collection/resource/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/architecture/controller/gallery/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/architecture/controller/idea/list';
import {
  ContextForIdeaRelationshipListFromScene,
  useControllerForIdeaRelationshipListFromScene,
} from '@/architecture/controller/idea/relationship/list-from-scene';
import {
  ContextForIdeaSceneList,
  useControllerForIdeaSceneList,
} from '@/architecture/controller/scene/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/architecture/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/architecture/controller/space/main';
import {
  ContextForSpaceMemberList,
  useControllerForSpaceMemberList,
} from '@/architecture/controller/space/member/list';
import {
  ContextForTaskList,
  useControllerForTaskList,
} from '@/architecture/controller/task/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/architecture/controller/user/main';
import {
  ContextForSpaceVisibility,
  SpaceVisibility,
} from '@/architecture/model/space/main';
import {
  ContextForLoggedInUserObj,
  ContextForUserPageRole,
  ContextForUserProfileVisibility,
  UserPageRole,
  UserProfileVisibility,
} from '@/architecture/model/user/main';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { useGlobalUser } from '@/logic/store/user/main';
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
            <PermissionWrapper>
              <RedirectWrapper>
                <ContextForSpaceChapterList.Provider
                  value={chapterListController}
                >
                  <ContextForIdeaSceneList.Provider value={sceneListController}>
                    <ContextForSceneIdeaList.Provider
                      value={ideaListController}
                    >
                      <ContextForGalleryList.Provider
                        value={galleryListController}
                      >
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
                                      <EffectWrapper>
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
                                      </EffectWrapper>
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
              </RedirectWrapper>
            </PermissionWrapper>
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
        : userMainController.state.obj.visibility === UserProfileVisibility.NONE
          ? UserPageRole.NONE
          : UserPageRole.UNDEFINED;

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
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  useEffect(() => {
    if (userMainController.state.objId && loggedInUser.id) {
      if (pageRole === UserPageRole.NONE) {
        window.location.href = `${portalMap.portal.register.link}?redirect=${window.location.href}`;
      } else if (pageRole === UserPageRole.VIEWER) {
        window.location.href = `${portalMap.portal.login.link}?redirect=${window.location.href}`;
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

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const chapterListController = useContext(ContextForSpaceChapterList);

  useEffect(() => {
    if (sceneListController.state.objId === '') {
      sceneListController.actions.createActions.createScene(
        'New Scene',
        '',
        '',
        loggedInUser.id,
        chapterListController.state.objId,
      );
    }
  }, [sceneListController.state.objId]);

  return <>{children}</>;
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
          <SpaceTabs tab={SpaceTabStage.Space} />
          <DashboardBody>{children}</DashboardBody>
        </DashboardContent>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default PrivateAstralPage(Page);
