import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import {
  exampleFileElem,
  FileElem,
  FileElemVariant,
} from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { AstralModalStep } from '@/ui/step/main';
import { useContext, useState } from 'react';

export function SpacesMapAddGenerateIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const {
    actions: { getImageResponse },
  } = useControllerForOpenAi();
  const loadingController = useContext(ContextForLoading);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const [file, changeFile] = useState({} as FileElem);
  const [title, changeTitle] = useState('' as string);
  const [prompt, changePrompt] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [variant, changeVariant] = useState<FileElemVariant>(
    FileElemVariant.IMAGE,
  );
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  async function createFileIdea() {
    if (!file.src) {
      alert('generate an image');
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
        <CustomisableModalContents>
          <div className='flex flex-row items-center space-x-[4rem]'>
            <div className='flex flex-shrink-0 flex-row items-center space-x-[2rem]'>
              <AstralModalStep>1</AstralModalStep>
              <input
                placeholder='Enter an image prompt'
                className='h-[3rem] w-full flex-shrink-0 border-b border-slate-300 border-opacity-30 bg-transparent text-slate-300 outline-none'
                title='Prompt'
                value={prompt}
                onChange={(e) => changePrompt(e.target.value)}
              />
              <div
                className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
                onClick={() => {
                  loadingController.loadingController.open();
                  openableController.close();
                  getImageResponse(prompt).then((res) => {
                    openableController.open();
                    changeFile({
                      ...exampleFileElem,
                      src: res[0].url || exampleFileElem.src,
                    });
                    loadingController.loadingController.close();
                  });
                }}
              >
                <AstralManufacturingIcon />
              </div>
            </div>
            {file.src && (
              <div className='flex flex-shrink-0 flex-row items-center space-x-[2rem]'>
                <AstralModalStep>2</AstralModalStep>
                <img src={file.src} className='aspect-square h-[300px]' />
              </div>
            )}
            {file.src && (
              <div className='flex flex-shrink-0 flex-row items-center space-x-[2rem]'>
                <div
                  onClick={createFileIdea}
                  className='flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-blue-500'
                >
                  <AstralArrowForwardIcon />
                </div>
                <p className='text-2xl font-bold text-slate-300'>Add Image</p>
              </div>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
