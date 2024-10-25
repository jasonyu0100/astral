import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton, FormButtonVariant } from '@/components/form/button/main';
import { FormSearchImage } from '@/components/form/file/search/search-image/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useEffect, useState } from 'react';

export function SpacesChatEditChapterModal() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [background, setBackground] = useState(exampleFileElem);

  useEffect(() => {
    if (chapterListController.state.currentObj) {
      setTitle(chapterListController.state.currentObj.title);
      setDescription(chapterListController.state.currentObj.description);
      setObjective(chapterListController.state.currentObj.objective);
    }
  }, [chapterListController.state.currentObj]);

  async function editChapter() {
    const payload = {
      ...chapterListController.state.currentObj,
      title,
      description,
      objective,
      bg: background.src,
    };
    const chapter = await chapterListController.actions.editActions.edit(
      chapterListController.state.objId,
      payload,
    );

    console.log(chapter);
    openableController.close();
  }

  async function deleteChapter() {
    const chapter = await chapterListController.actions.deleteActions.delete(
      chapterListController.state.objId,
    );
    console.log(chapter);
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Edit Chapter</FormTitle>
          <FormBody>
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormTextArea
              title='Objective'
              rows={5}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormSearchImage
              fileElem={background}
              label='Background (optional)'
              onChange={(file) => setBackground(file)}
            ></FormSearchImage>
          </FormBody>
          <FormFooter>
            <FormButton
              variant={FormButtonVariant.PRIMARY}
              onClick={editChapter}
            >
              Edit
            </FormButton>
            <FormButton
              variant={FormButtonVariant.SECONDARY}
              onClick={deleteChapter}
            >
              Delete
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
