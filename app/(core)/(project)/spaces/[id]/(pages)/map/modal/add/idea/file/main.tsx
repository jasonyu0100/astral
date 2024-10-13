import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem } from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { AstralButtonRoundedAction } from '@/ui/button/rounded/action/main';
import { FormUploadFile } from '@/ui/form/file/upload/upload-file/main';
import { AstralTextInput } from '@/ui/input/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { AstralModalStep } from '@/ui/step/main';
import { useContext, useState } from 'react';

export function SpacesMapAddFileIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [file, changeFile] = useState({} as FileElem);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  async function createFileIdea() {
    if (file.id === undefined) {
      alert('Please upload a file first.');
      return;
    }
    const idea = await ideaListController.actions.createActions.createFromFile(
      user.id,
      sceneListController.state.objId,
      title,
      description,
      0,
      0,
      150,
      150,
      file,
      ideaListController.state.objs.length,
    );
    await activityListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      ideaListController.state.objId,
      idea.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents className='h-3/4'>
          <div className='flex flex-col space-y-[3rem]'>
            <div className='flex flex-row items-center space-x-[3rem]'>
              <AstralModalStep>1</AstralModalStep>
              <FormUploadFile onChange={(file) => changeFile(file)} />
            </div>
            <div className='flex flex-row items-center space-x-[3rem]'>
              <AstralModalStep>2</AstralModalStep>
              <AstralTextInput
                placeholder='Enter the title of the idea'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralButtonRoundedAction onClick={createFileIdea}>
                <AstralCheckIcon />
              </AstralButtonRoundedAction>
            </div>
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
