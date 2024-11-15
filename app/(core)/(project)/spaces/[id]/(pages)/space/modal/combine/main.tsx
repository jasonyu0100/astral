import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import {
  TextElement,
  TextElementVariant,
} from '@/architecture/model/elements/text/main';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ElementIdea } from '@/components/element/idea/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { AstralSubjectIcon } from '@/icons/subject/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useEffect, useState } from 'react';
import { ContextForSpacesSpace } from '../../controller/main';

export function SpacesSpaceCombineIdeas() {
  const user = useGlobalUser((state) => state.user);
  const {
    state: { selectedIdeas },
    actions: { updateSelectedIdeas },
  } = useContext(ContextForSpacesSpace);
  const loadingController = useContext(ContextForLoading);
  const openAiController = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const [combinationDescription, setCombinationDescription] = useState('');

  useEffect(() => {
    setCombinationDescription('');
  }, [openableController.opened]);

  async function combineIdeas() {
    loadingController.loadingController.open();
    const ideaSummary = selectedIdeas
      .filter((idea) => idea.variant === ElementVariant.TEXT)
      .map((idea, index) => `${idea.textElem?.text}`)
      .join(', ');
    const messageHistory = [
      `[Source Ideas]`,
      ideaSummary,
      `[Instructions]: Combine the ideas into a single idea. For example, if the ideas are "A" and "B", the combined idea could be "A and B" or "A but not B".`,
      `If you can combine the ideas, please provide a description of the combined idea. If you cannot combine the ideas, please provide a reason why not.`,
      `Length of combined idea should be less than 300 characters.`,
    ];
    const messagePrompt = messageHistory.join('\n');

    const combination =
      await openAiController.actions.getMessageResponse(messagePrompt);
    setCombinationDescription(combination || '');
    loadingController.loadingController.close();
  }

  async function executeCombineIdeas() {
    openableController.close();
    loadingController.loadingController.open();

    const idea =
      await ideaListController.actions.createActions.createIdeaFromTextElement(
        user.id,
        sceneListController.state.objId,
        selectedIdeas[0].title,
        selectedIdeas[0].description,
        selectedIdeas[0].x + Math.round(Math.random() * 50),
        selectedIdeas[0].y + Math.round(Math.random() * 50),
        selectedIdeas[0].width,
        selectedIdeas[0].height,
        {
          id: crypto.randomUUID(),
          title: 'Combined Idea',
          text: combinationDescription,
          variant: TextElementVariant.STICKY,
        } as TextElement,
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
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Combine Ideas</AstralModalTitle>
              <div className='grid w-full grid-cols-3 gap-[1rem]'>
                {selectedIdeas.map((idea) => (
                  <ContextForIdeaObj.Provider value={idea}>
                    <ElementIdea />
                  </ContextForIdeaObj.Provider>
                ))}
              </div>
              <HorizontalDivider />
              <div className='grid w-full grid-cols-3 gap-[1rem]'>
                <div className='col-span-1 aspect-square bg-yellow-500 p-[1rem]'>
                  <textarea
                    className='h-full w-full bg-transparent outline-none'
                    value={combinationDescription}
                    onChange={(e) => setCombinationDescription(e.target.value)}
                  />
                </div>
              </div>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                className='from-slate-500 to-slate-600'
                onClick={() => combineIdeas()}
              >
                <AstralSubjectIcon />
              </AstralRoundedActionButton>
              {combinationDescription !== '' && (
                <AstralRoundedActionButton
                  onClick={() => executeCombineIdeas()}
                >
                  <AstralCheckIcon />
                </AstralRoundedActionButton>
              )}
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
