import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { useContext, useState } from 'react';

export function SpaceBoardCreateGalleryModal() {
  const openableController = useContext(ContextForOpenable);
  const galleryListController = useContext(ContextForGalleryList);
  const userId = useGlobalUser((state) => state.user.id);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileElem);

  async function createGallery() {
    galleryListController.actions.createActions
      .createGallery(userId, title, description, thumbnail)
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Create Gallery</FormTitle>
          <FormBody>
            <FormSearchImage
              fileElem={thumbnail}
              onChange={(file) => changeThumbnail(file)}
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
    </ContextForOpenable.Provider>
  );
}
