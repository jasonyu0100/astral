import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { useControllerForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useControllerForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { useControllerForSpaceIdeaRelationshipListFromChapter } from '@/(server)/controller/space/relationship/list-from-chapter';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ElementIdeaPreview } from '@/ui/element/idea/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useEffect, useState } from 'react';
import { spaceMap } from '../../../../map';
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
  const sceneListController = useContext(ContextForChapterSceneList);
  const logListController = useControllerForChapterLogList(
    chapterListController.state.objId,
  );
  const linkListController = useControllerForLogLinkList(
    logListController.state.objId,
  );
  const updateListController = useControllerForSessionUpdateListFromChapter(
    chapterListController.state.objId,
  );
  const spaceIdeaRelationshipListController =
    useControllerForSpaceIdeaRelationshipListFromChapter(
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
    const log = await logListController.actions.createActions.createLog(
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
    const linkRelationships = await Promise.all(
      links.slice(0, links.length - 1).map((fromLink, index) => {
        const toLink = links[index + 1];
        const relationshipMatch =
          spaceIdeaRelationshipListController.actions.stateActions.getLinkMatch(
            fromLink,
            toLink,
          );
        if (relationshipMatch) {
          return spaceIdeaRelationshipListController.actions.editActions.updateFromLink(
            fromLink,
            toLink,
          );
        } else {
          return spaceIdeaRelationshipListController.actions.createActions.createFromLink(
            fromLink,
            toLink,
          );
        }
      }),
    );
    await updateListController.actions.createActions
      .createFromChapterLog(
        user.id,
        spaceController.state.objId,
        chapterListController.state.objId,
        log.id,
      )
      .then(() => {
        window.location.href = spaceMap.space.id.journey.link(
          spaceController.state.objId,
        );
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Generate Log</FormTitle>
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
                <ContextForSceneIdeaObj.Provider value={idea}>
                  <ElementIdeaPreview />
                </ContextForSceneIdeaObj.Provider>
              ))}
            </div>
          </FormBody>
          <FormFooter>
            <FormButton onClick={createLog}>Next</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
