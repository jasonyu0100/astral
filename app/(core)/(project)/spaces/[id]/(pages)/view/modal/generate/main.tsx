import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ElementIdea } from '@/components/element/idea/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { useControllerForIdeaRelationshipListFromChapter } from '@/server/controller/idea/relationship/list-from-chapter';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useControllerForTaskLinkList } from '@/server/controller/way/link/list';
import { useControllerForTaskList } from '@/server/controller/way/list';
import { ElementVariant } from '@/server/model/elements/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useEffect, useState } from 'react';
import { spacesMap } from '../../../../map';
import { ContextForSpacesView } from '../../../controller/main';

export function SpacesViewGenerateLog() {
  const user = useGlobalUser((state) => state.user);
  const {
    state: { selectedIdeas },
  } = useContext(ContextForSpacesView);
  const loadingController = useContext(ContextForLoading);
  const openAiController = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const wayListController = useControllerForTaskList(
    chapterListController.state.objId,
  );
  const linkListController = useControllerForTaskLinkList(
    wayListController.state.objId,
  );
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const ideaRelationshipListController =
    useControllerForIdeaRelationshipListFromChapter(
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
    const log = await wayListController.actions.createActions.createTask(
      chapterListController.state.objId,
      user.id,
      title,
      description,
    );
    const links = await Promise.all(
      selectedIdeas.map((idea) =>
        linkListController.actions.createActions.createLinkFromIdea(
          user.id,
          log.id,
          idea,
          spaceController.state.objId,
          chapterListController.state.objId,
          sceneListController.state.objId,
        ),
      ),
    );
    await Promise.all(
      links.slice(0, links.length - 1).map((fromLink, index) => {
        const toLink = links[index + 1];
        const relationshipMatch =
          ideaRelationshipListController.actions.stateActions.getLinkMatch(
            fromLink,
            toLink,
          );
        if (relationshipMatch) {
          return ideaRelationshipListController.actions.editActions.updateFromLink(
            fromLink,
            toLink,
          );
        } else {
          return ideaRelationshipListController.actions.createActions.createFromLink(
            fromLink,
            toLink,
          );
        }
      }),
    );
    await activityListController.actions.createActions
      .createFromChapterTask(
        user.id,
        spaceController.state.objId,
        chapterListController.state.objId,
        log.id,
      )
      .then(() => {
        window.location.href = `${spacesMap.spaces.id.board.link(
          spaceController.state.objId,
        )}?chapter=${chapterListController.state.objId}&scene=${sceneListController.state.objId}`;
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <div className='flex flex-col space-y-[2rem]'>
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
              <div className='grid grid-cols-3 gap-[1rem]'>
                {selectedIdeas.map((idea) => (
                  <ContextForIdeaObj.Provider value={idea}>
                    <ElementIdea />
                  </ContextForIdeaObj.Provider>
                ))}
              </div>
            </div>
            <AstralRoundedActionButton onClick={createLog}>
              <AstralCheckIcon />
            </AstralRoundedActionButton>
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
