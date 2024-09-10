'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSpotlightAttachmentList,
  useControllerForSpotlightAttachmentList,
} from '@/(server)/controller/space/chapter/spotlight/attachment/list';
import {
  ContextForSpotlightCommentList,
  useControllerForSpotlightCommentList,
} from '@/(server)/controller/space/chapter/spotlight/comment/list';
import {
  ContextForSpotlightKarmaList,
  useControllerForSpotlightKarmaList,
} from '@/(server)/controller/space/chapter/spotlight/karma/list';
import {
  ContextForSpotlightLinkList,
  useControllerForSpotlightLinkList,
} from '@/(server)/controller/space/chapter/spotlight/link/list';
import {
  ContextForChapterSpotlightListFromChapter,
  useControllerForChapterSpotlightListFromChapter,
} from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import { SpaceFlightModals } from './modal/controller/main';
import { SpaceFlightView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const spotlightId = searchParams.get('spotlight');
  const chapterId = searchParams.get('chapter');

  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const spotlightListController =
    useControllerForChapterSpotlightListFromChapter(
      chapterListController.state.objId,
      spotlightId,
    );
  const commentListController = useControllerForSpotlightCommentList(
    spotlightListController.state.objId,
  );
  const spotlightKarmaListController = useControllerForSpotlightKarmaList(
    spotlightListController.state.objId,
  );
  const attachmentListController = useControllerForSpotlightAttachmentList(
    spotlightListController.state.objId,
  );
  const linkListController = useControllerForSpotlightLinkList(
    spotlightListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterSpotlightListFromChapter.Provider
            value={spotlightListController}
          >
            <ContextForSpotlightKarmaList.Provider
              value={spotlightKarmaListController}
            >
              <ContextForSpotlightAttachmentList.Provider
                value={attachmentListController}
              >
                <ContextForSpotlightCommentList.Provider
                  value={commentListController}
                >
                  <ContextForSpotlightLinkList.Provider
                    value={linkListController}
                  >
                    <LoadingWrapper>
                      <SpaceFlightControllerWrapper>
                        <SpaceFlightModals>
                          <SpaceFlightView />
                        </SpaceFlightModals>
                      </SpaceFlightControllerWrapper>
                    </LoadingWrapper>
                  </ContextForSpotlightLinkList.Provider>
                </ContextForSpotlightCommentList.Provider>
              </ContextForSpotlightAttachmentList.Provider>
            </ContextForSpotlightKarmaList.Provider>
          </ContextForChapterSpotlightListFromChapter.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function SpaceFlightControllerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export default protectedUnderAstralAuth(Page);
