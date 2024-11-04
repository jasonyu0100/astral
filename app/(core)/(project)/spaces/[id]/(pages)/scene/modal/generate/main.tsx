import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { useControllerForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { useControllerForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ElementIdea } from '@/components/element/idea/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { AstralRefreshIcon } from '@/icons/refresh/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
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
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
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
    const messageHistory = [
      `[START OF INSTRUCTIONS]`,
      `Summarise the following into a concise task description (min 50 - max 100 chars):`,
      selectedIdeas
        .filter((idea) => idea.variant === ElementVariant.TEXT)
        .map((idea) => `Idea - ${idea.textElem?.text}`)
        .join('\n'),
      `E.G - "Create a new design for the website that is modern and sleek."`,
      `[END OF INSTRUCTIONS]`,
    ];
    const messagePrompt = messageHistory.join('\n');

    await openAiController.actions
      .getMessageResponse(messagePrompt)
      .then((description) => {
        setDescription(description || '');
      });
  }

  async function generateTitle() {
    const messageHistory = [
      `[START OF INSTRUCTIONS]`,
      `Summarise the following into a concise task title (min 10 - max 20 chars):`,
      selectedIdeas
        .filter((idea) => idea.variant === ElementVariant.TEXT)
        .map((idea) => `Idea - ${idea.textElem?.text}`)
        .join('\n'),
      `E.G - "Design Website"`,
      `[END OF INSTRUCTIONS]`,
    ];
    const messagePrompt = messageHistory.join('\n');

    await openAiController.actions
      .getMessageResponse(messagePrompt)
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
      spaceController.state.objId,
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
        window.location.href = `${spacesMap.spaces.id.updates.link(
          spaceController.state.objId,
        )}?chapter=${chapterListController.state.objId}&scene=${sceneListController.state.objId}`;
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
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
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                onClick={() => {
                  generateDescription();
                  generateTitle();
                }}
                className='from-slate-500 to-slate-600'
              >
                <AstralRefreshIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton onClick={createLog}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
