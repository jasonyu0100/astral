import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useControllerForReviewUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem, FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormSearchImage } from '@/ui/form/file/search/search-image/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpacesMapAddSearchIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [variant, changeVariant] = useState<FileElemVariant>(
    FileElemVariant.IMAGE,
  );
  const [file, changeFile] = useState({} as FileElem);
  const reviewUpdateListController =
    useControllerForReviewUpdateListFromChapter(
      chapterListController.state.objId,
    );

  async function createFileIdea() {
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
    await reviewUpdateListController.actions.createActions.createFromChapterSceneIdea(
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
          <FormTitle>Search Image</FormTitle>
          <FormBody>
            <FormSearchImage
              fileElem={file}
              onChange={(file) => changeFile(file)}
              label='Thumbnail'
            />
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createFileIdea}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
