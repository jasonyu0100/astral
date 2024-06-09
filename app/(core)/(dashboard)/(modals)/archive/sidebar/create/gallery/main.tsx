import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { FileElem } from '@/(model)/elements/file/main';
import { useContext, useState } from 'react';
import { DisplayImagePreview } from '@/(components)/(form)/file/search/search-image/display-image-preview/main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { ContextForSidebarModals } from '../main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useControllerForGalleryList } from '@/(model)/(controller)/gallery/list';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export function SidebarCreateGalleryModal() {
  const { opened, close } = useContext(ContextForOpenable);
  const galleryListController = useControllerForGalleryList('');
  const userId = useGlobalUser((state) => state.user.id);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileElem);

  async function createGallery() {
    galleryListController.actions.createActions
      .createGallery(userId, title, description, thumbnail)
      .then(() => {
        close();
      });
  }

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
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
  );
}
