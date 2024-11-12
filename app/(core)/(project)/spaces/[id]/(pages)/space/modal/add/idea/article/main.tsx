import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  TextElement,
  TextElementVariant,
} from '@/architecture/model/elements/text/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getTextIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesSpaceAddArticleIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');
  const [text, changeText] = useState<string>('');
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  async function createArticle() {
    const textElem = {
      id: crypto.randomUUID(),
      title: title,
      text: text,
      variant: TextElementVariant.ARTICLE,
    } as TextElement;

    const { width, height } = getTextIdeaBounds(textElem);

    ideaListController.actions.createActions
      .createIdeaFromTextElement(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        Math.ceil(Math.random() * 200),
        Math.ceil(Math.random() * 200),
        width,
        height,
        textElem,
        ideaListController.state.objs.length,
      )
      .then((idea) => {
        activityListController.actions.createActions.createFromChapterSceneIdea(
          user.id,
          spaceController.state.objId,
          chapterListController.state.objId,
          sceneListController.state.objId,
          idea.id,
        );
        openableController.close();
      });
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added
      createArticle();
    }
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBodyContents>
            <div className='flex w-full flex-row items-center justify-center space-x-[1rem]'>
              <AstralModalStep>1</AstralModalStep>
              <div className='aspect-[10/14] w-[500px] bg-slate-200 p-[2rem] shadow-md'>
                <textarea
                  placeholder='Enter text here...'
                  className='text-md h-full w-full bg-transparent font-light text-black outline-none placeholder:text-slate-300'
                  onChange={(e) => changeText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </AstralModalBodyContents>
          <AstralModalBodyAction>
            <AstralRoundedActionButton onClick={createArticle}>
              <AstralArrowForwardIcon />
            </AstralRoundedActionButton>
          </AstralModalBodyAction>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
