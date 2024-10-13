import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { TextElem, TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { AstralButtonRoundedAction } from '@/ui/button/rounded/action/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext, useState } from 'react';
import { ContextForSpacesMap } from '../../../../controller/main';

export function SpacesMapAddTextIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const openableController = useContext(ContextForOpenable);
  const [variant, changeVariant] = useState<string>(TextElemVariant.STICKY);
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');
  const [text, changeText] = useState<string>('');
  const mapController = useContext(ContextForSpacesMap);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  function create() {
    const { x, y, width, height } = mapController.actions.getAvailableXYWH();
    ideaListController.actions.createActions
      .createFromText(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        x,
        y,
        width,
        height,
        {
          id: crypto.randomUUID(),
          title: title,
          text: text,
          variant: variant,
        } as TextElem,
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
        <CustomisableModalContents className='h-1/2 space-x-[3rem]'>
          <div className='aspect-square h-full bg-yellow-500 p-[3rem]'>
            <textarea
              placeholder='Enter text here...'
              className='h-full w-full bg-transparent outline-none placeholder:text-slate-800'
              onChange={(e) => changeText(e.target.value)}
            />
          </div>
          <AstralButtonRoundedAction
            className='h-[5rem] w-[5rem]'
            onClick={create}
          >
            <AstralArrowForwardIcon />
          </AstralButtonRoundedAction>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
