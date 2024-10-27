import { AstralRoundedActionButton } from '@/components/button/action/main';
import { FormUploadFile } from '@/components/form/file/upload/upload-file/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { FileElement } from '@/server/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { getFileIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesSceneAddFileIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [file, changeFile] = useState({} as FileElement);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  async function createFileIdea() {
    if (file.id === undefined) {
      alert('Please upload a file first.');
      return;
    }

    const { width, height } = await getFileIdeaBounds(file);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromFileElement(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        Math.ceil(Math.random() * 200),
        Math.ceil(Math.random() * 200),
        width,
        height,
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
        <CustomisableModalContents>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <FormUploadFile onChange={(file) => changeFile(file)} />
            {file.id && (
              <AstralRoundedActionButton
                className='h-[4rem] w-[4rem]'
                onClick={createFileIdea}
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
