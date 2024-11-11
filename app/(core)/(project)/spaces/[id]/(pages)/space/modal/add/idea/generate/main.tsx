import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  exampleFileElement,
  FileElement,
} from '@/architecture/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getFileIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesSpaceAddGenerateIdeaModal() {
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
  const [file, changeFile] = useState({} as FileElement);
  const [title, changeTitle] = useState('' as string);
  const [prompt, changePrompt] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  async function createFileIdea() {
    if (!file.src) {
      alert('generate an image');
      return;
    }

    const { width, height } = getFileIdeaBounds(file);

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

  const generateImage = () => {
    loadingController.loadingController.open();
    openableController.close();
    getImageResponse(prompt).then((res) => {
      openableController.open();
      changeFile({
        ...exampleFileElement,
        src: res[0].url || exampleFileElement.src,
      });
      loadingController.loadingController.close();
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added
      generateImage();
    }
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <AstralTextLineInput
              className='w-[400px]'
              placeholder='Enter an image prompt'
              onKeyDown={handleKeyDown}
              title='Prompt'
              value={prompt}
              onChange={(e) => changePrompt(e.target.value)}
            />
            <div className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'>
              <AstralCheckIcon
                onClick={() => {
                  generateImage();
                }}
              />
            </div>
            {file.src && (
              <>
                <AstralModalStep>2</AstralModalStep>
                <img src={file.src} className='aspect-square w-[400px]' />
                <AstralRoundedActionButton onClick={createFileIdea}>
                  <AstralCheckIcon />
                </AstralRoundedActionButton>
              </>
            )}
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
