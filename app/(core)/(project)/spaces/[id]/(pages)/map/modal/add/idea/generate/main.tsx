import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { useControllerForReviewUpdateListFromChapter } from '@/(server)/controller/update/list-from-chapter';
import {
  exampleFileElem,
  FileElem,
  FileElemVariant,
} from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
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
  const sceneListController = useContext(ContextForChapterSceneList);
  const [file, changeFile] = useState({} as FileElem);
  const [title, changeTitle] = useState('' as string);
  const [prompt, changePrompt] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [variant, changeVariant] = useState<FileElemVariant>(
    FileElemVariant.IMAGE,
  );
  const activityListController = useControllerForReviewUpdateListFromChapter(
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
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Generate Image</FormTitle>
          <FormBody>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <FormInput
                title='Prompt'
                placeholder='Enter a prompt'
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
                <AstralArrowForwardIcon />
              </div>
            </div>
            {file.src && (
              <>
                <img src={file.src} />
                <FormInput
                  title='Title'
                  value={title}
                  onChange={(e) => changeTitle(e.target.value)}
                />
              </>
            )}
          </FormBody>
          <FormFooter>
            <FormButton onClick={createFileIdea}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
