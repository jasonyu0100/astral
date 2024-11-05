import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { FileElement } from '@/architecture/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralSearchImage } from '@/components/form/search-image/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getFileIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesSpaceAddSearchIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const [description, changeDescription] = useState<string>('');
  const [file, changeFile] = useState({} as FileElement);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  async function createFileIdea() {
    const { width, height } = getFileIdeaBounds(file);
    const idea =
      await ideaListController.actions.createActions.createIdeaFromFileElement(
        user.id,
        sceneListController.state.objId,
        file.title,
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
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBodyContents>
            <div className='flex w-full flex-row items-center justify-center space-x-[1rem]'>
              <AstralModalStep>1</AstralModalStep>
              <AstralSearchImage
                fileElem={file}
                onChange={(file) => changeFile(file)}
              />
            </div>
          </AstralModalBodyContents>
          {file.id && (
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={createFileIdea}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          )}
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
