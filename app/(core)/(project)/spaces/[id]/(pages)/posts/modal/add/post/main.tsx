import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { FileElement } from '@/architecture/model/elements/file/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralUploadFiles } from '@/components/form/upload/upload-files/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useState } from 'react';

export function SpacesPostsAddPostModal() {
  const user = useGlobalUser((state) => state.user);
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );

  const openableController = useContext(ContextForOpenable);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [files, changeFiles] = useState([] as FileElement[]);

  async function createPost() {
    const post = await postListController.actions.createActions.createPost(
      title,
      description,
      user.id,
      chapterListController.state.objId,
      spaceMainController.state.objId,
    );
    files.forEach(async (file) => {
      await attachmentListController.actions.createActions.createFromFile(
        user.id,
        post.id,
        file,
      );
    });

    await activityListController.actions.createActions.createFromChapterPost(
      user.id,
      spaceMainController.state.objId,
      chapterListController.state.objId,
      post.id,
    );
    window.location.href = `${liveMap.live.link(spaceMainController.state.objId)}?chapter=${chapterListController.state.objId}`;
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex w-[800px] flex-row items-center space-x-[2rem]'>
            <div className='flex w-full flex-col space-y-[2rem]'>
              <AstralModalTitle>Create Post</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter title'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter description'
                rows={8}
                value={description}
                onChange={(e) => changeDescription(e.target.value)}
                style={{ resize: 'none' }}
              />
              <AstralUploadFiles
                label='Attachments'
                onChange={(files) => {
                  changeFiles(files);
                }}
              />
            </div>
            <div className='flex flex-shrink-0 flex-col space-y-[1rem]'>
              <AstralRoundedActionButton onClick={createPost}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            </div>
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
