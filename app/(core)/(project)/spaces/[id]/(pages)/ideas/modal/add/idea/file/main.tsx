import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { FileElement } from '@/architecture/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralUploadFile } from '@/components/form/upload/upload-file/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getFileIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesIdeasAddFileIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const [file, changeFile] = useState({} as FileElement);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  async function createFileIdea() {
    if (file.id === undefined) {
      alert('Please upload a file first.');
      return;
    }

    const { width, height } = getFileIdeaBounds(file);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromFileElement(
        user.id,
        sceneListController.state.objId,
        file.title,
        '',
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
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <AstralUploadFile onChange={(file) => changeFile(file)} />
            {file.id && (
              <AstralRoundedActionButton onClick={createFileIdea}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            )}
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
