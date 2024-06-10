import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import {
  ContextForFileChangable,
  useControllerForFileChangable,
} from '@/(logic)/contexts/fileChangable/main';

export function ExplorerCreateGalleryModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const galleryListController = useContext(ContextForGalleryList);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const fileChangableController = useControllerForFileChangable();

  async function createGallery() {
    galleryListController.actions.createActions.createGallery(
      user.id,
      title,
      description,
      fileChangableController.fileElem,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForFileChangable.Provider value={fileChangableController}>
        <PolaroidModal>
          <FormContainer>
            <FormTitle>Create Gallery</FormTitle>
            <FormBody>
              <FormSearchImage
                fileElem={fileChangableController.fileElem}
                onChange={fileChangableController.updateFileElem}
                label='Thumbnail'
              />
              <FormInput
                title='Title'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <FormTextArea
                title='Description'
                rows={5}
                value={description}
                onChange={(e) => changeDescription(e.target.value)}
                style={{ resize: 'none' }}
              />
            </FormBody>
            <FormFooter>
              <FormButton onClick={createGallery}>Create</FormButton>
            </FormFooter>
          </FormContainer>
        </PolaroidModal>
      </ContextForFileChangable.Provider>
    </ContextForOpenable.Provider>
  );
}
