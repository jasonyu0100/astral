import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ElementIdea } from '@/components/element/idea/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { useControllerForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { useControllerForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ElementVariant } from '@/server/model/elements/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useEffect, useState } from 'react';
import { spacesMap } from '../../../../map';
import { ContextForSpacesScene } from '../../controller/main';

export function SpacesSceneGeneratePost() {
  const user = useGlobalUser((state) => state.user);
  const {
    state: { selectedIdeas },
  } = useContext(ContextForSpacesScene);
  const loadingController = useContext(ContextForLoading);
  const openAiController = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const postListController = useControllerForUserPostListFromChapter(
    chapterListController.state.objId,
  );
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postListController.state.objId,
  );
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (openableController.opened) {
      loadingController.loadingController.open();
      generateDescription().then(() =>
        generateTitle().then(() => {
          loadingController.loadingController.close();
        }),
      );
    }
  }, [openableController.opened]);

  async function generateDescription() {
    const ideaSummary = selectedIdeas
      .filter((idea) => idea.variant === ElementVariant.TEXT)
      .map((idea) => `Idea - ${idea.textElem?.text}`)
      .join('\n');
    await openAiController.actions
      .getMessageResponse(
        `
      Summarise the following into a concise task description (100 - 300 chars): ${ideaSummary}`,
      )
      .then((description) => {
        setDescription(description || '');
      });
  }

  async function generateTitle() {
    const ideaSummary = selectedIdeas
      .filter((idea) => idea.variant === ElementVariant.TEXT)
      .map((idea) => `Idea - ${idea.textElem?.text}`)
      .join('\n');
    await openAiController.actions
      .getMessageResponse(
        `
      Summarise the following into a concise task title (10 - 20 chars): ${ideaSummary}`,
      )
      .then((title) => {
        setTitle(title || '');
      });
  }

  async function createLog() {
    loadingController.loadingController.open();
    openableController.close();

    const post = await postListController.actions.createActions.createPost(
      title,
      description,
      user.id,
      chapterListController.state.objId,
    );

    const attachments = await Promise.all(
      selectedIdeas.map((idea) =>
        attachmentListController.actions.createActions.createFromIdea(
          user.id,
          post.id,
          idea,
        ),
      ),
    );

    await activityListController.actions.createActions
      .createFromChapterPost(
        user.id,
        spaceController.state.objId,
        chapterListController.state.objId,
        post.id,
      )
      .then(() => {
        window.location.href = `${spacesMap.spaces.id.post.link(
          spaceController.state.objId,
        )}?chapter=${chapterListController.state.objId}&scene=${sceneListController.state.objId}`;
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex w-[800px] flex-row items-center space-x-[2rem]'>
            <div className='flex w-full flex-col space-y-[2rem]'>
              <p className='text-3xl font-bold text-slate-300'>Generate Post</p>
              <AstralTextLineInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter a title for the task...'
                title='Title'
              />
              <AstralTextAreaInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                title='Description'
                placeholder='Enter a description for the task...'
                rows={8}
              />
              <div className='grid h-[300px] w-full grid-cols-3 gap-[1rem] overflow-auto'>
                {selectedIdeas.map((idea) => (
                  <div key={idea.id}>
                    <ContextForIdeaObj.Provider value={idea}>
                      <ElementIdea />
                    </ContextForIdeaObj.Provider>
                  </div>
                ))}
              </div>
            </div>
            <AstralRoundedActionButton onClick={createLog}>
              <AstralCheckIcon />
            </AstralRoundedActionButton>
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
