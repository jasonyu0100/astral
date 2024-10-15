import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { useControllerForIdeaRelationshipListFromChapter } from '@/(server)/controller/idea/relationship/list-from-chapter';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { useControllerForTaskLinkList } from '@/(server)/controller/way/link/list';
import { useControllerForTaskList } from '@/(server)/controller/way/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ElementIdeaPreview } from '@/ui/element/idea/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { ButtonVariant, FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useEffect, useState } from 'react';
import { spacesMap } from '../../../../map';
import { ContextForSpacesMap } from '../../controller/main';

export function SpacesMapGenerateLog() {
  const user = useGlobalUser((state) => state.user);
  const {
    state: { selectedIdeas },
  } = useContext(ContextForSpacesMap);
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
    const log = await wayListController.actions.createActions.createLog(
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
      .createFromChapterLog(
        user.id,
        spaceController.state.objId,
        chapterListController.state.objId,
        log.id,
      )
      .then(() => {
        window.location.href = `${spacesMap.spaces.id.journey.link(
          spaceController.state.objId,
        )}?chapter=${chapterListController.state.objId}&scene=${sceneListController.state.objId}`;
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Generate Task</FormTitle>
          <FormBody>
            <FormInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              title='Title'
            />
            <FormTextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              title='Description'
              rows={8}
            />
            <div className='grid w-full grid-cols-3 gap-[1rem]'>
              {selectedIdeas.map((idea) => (
                <ContextForIdeaObj.Provider value={idea}>
                  <ElementIdeaPreview />
                </ContextForIdeaObj.Provider>
              ))}
            </div>
          </FormBody>
          <FormFooter>
            <FormButton variant={ButtonVariant.PRIMARY} onClick={createLog}>
              Next
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
