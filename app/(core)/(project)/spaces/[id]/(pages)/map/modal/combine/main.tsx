import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElem, TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { AstralSubjectIcon } from '@/icons/subject/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ElementIdeaPreview } from '@/ui/element/idea/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';
import { ContextForSpacesMap } from '../../controller/main';

export function SpacesMapCombineIdeas() {
  const user = useGlobalUser((state) => state.user);
  const {
    state: { selectedIdeas },
    actions: { updateSelectedIdeas },
  } = useContext(ContextForSpacesMap);
  const loadingController = useContext(ContextForLoading);
  const openAiController = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const [combinationDescription, setCombinationDescription] = useState('');

  async function combineIdeas() {
    loadingController.loadingController.open();
    const ideaSummary = selectedIdeas
      .filter((idea) => idea.variant === ElementVariant.TEXT)
      .map((idea, index) => `Idea ${index} - ${idea.textElem?.text}`)
      .join(' ');
    const combination = await openAiController.actions.getMessageResponse(
      `Summarise the following ideas: ${ideaSummary}`,
    );
    setCombinationDescription(combination || '');
    loadingController.loadingController.close();
  }

  async function executeCombineIdeas() {
    openableController.close();
    loadingController.loadingController.open();
    await Promise.all(
      selectedIdeas.map((idea) =>
        ideaListController.actions.deleteActions.delete(idea.id),
      ),
    );

    const idea =
      await ideaListController.actions.createActions.createIdeaFromTextElement(
        user.id,
        sceneListController.state.objId,
        selectedIdeas[0].title,
        selectedIdeas[0].description,
        selectedIdeas[0].x,
        selectedIdeas[0].y,
        selectedIdeas[0].width * 1.5,
        selectedIdeas[0].height * 1.5,
        {
          id: crypto.randomUUID(),
          title: 'Combined Idea',
          text: combinationDescription,
          variant: TextElemVariant.STICKY,
        } as TextElem,
        ideaListController.state.objs.length,
      );
    updateSelectedIdeas([idea]);

    await activityListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      ideaListController.state.objId,
      idea.id,
    );
    loadingController.loadingController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Combine Ideas</FormTitle>
          <FormBody>
            <div className='grid w-full grid-cols-3 gap-[1rem]'>
              {selectedIdeas.map((idea) => (
                <ContextForIdeaObj.Provider value={idea}>
                  <ElementIdeaPreview />
                </ContextForIdeaObj.Provider>
              ))}
            </div>
            <HorizontalDivider />
            <div className='grid w-full grid-cols-3 gap-[1rem]'>
              <div className='col-span-2 aspect-square bg-yellow-500 p-[1rem]'>
                <textarea
                  className='h-full w-full bg-transparent outline-none'
                  value={combinationDescription}
                  onChange={(e) => setCombinationDescription(e.target.value)}
                />
              </div>
              <div className='flex items-center justify-center'>
                <div
                  className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'
                  onClick={() => combineIdeas()}
                >
                  <AstralSubjectIcon />
                </div>
              </div>
            </div>
          </FormBody>
          <FormFooter>
            <FormButton onClick={() => executeCombineIdeas()}>
              Combine
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
