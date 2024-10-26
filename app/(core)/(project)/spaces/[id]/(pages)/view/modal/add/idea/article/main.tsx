import { AstralRoundedActionButton } from '@/components/button/action/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { TextElem, TextElemVariant } from '@/server/model/elements/text/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { getTextIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesViewAddArticleIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');
  const [text, changeText] = useState<string>('');
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  async function create() {
    const textElem = {
      id: crypto.randomUUID(),
      title: title,
      text: text,
      variant: TextElemVariant.ARTICLE,
    } as TextElem;

    const { width, height } = await getTextIdeaBounds(textElem);

    ideaListController.actions.createActions
      .createIdeaFromTextElement(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        0,
        0,
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

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <div className='aspect-[7/5] w-[400px] rounded-[1rem] bg-slate-300 bg-opacity-10 p-[2rem] shadow-md'>
              <textarea
                placeholder='Enter text here...'
                className='h-full w-full bg-transparent text-lg font-light text-slate-300 outline-none placeholder:text-slate-300'
                onChange={(e) => changeText(e.target.value)}
              />
            </div>
            {text.length > 0 && (
              <AstralRoundedActionButton
                className='h-[4rem] w-[4rem]'
                onClick={create}
              >
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
