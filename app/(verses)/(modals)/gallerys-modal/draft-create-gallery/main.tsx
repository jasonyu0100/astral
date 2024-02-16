import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { FileObj } from '@/(ouros)/(model)/resource/file/main';
import { useContext, useState } from 'react';
import { GallerysModalContext } from '../main';
import { SelectedImage } from '@/(common)/form/selected-image/main';
import { FormSearchImage } from '@/(common)/form/search-image/main';
import { DraftSidebarContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/(draft-epic)/sidebar/main';

export function DraftCreateGalleryModal() {
  const modalContext = useContext(GallerysModalContext);
  const { opened, close } = modalContext.draftCreateGalleryModal
  const { galleryHandler } = useContext(DraftSidebarContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Create Gallery</FormTitle>
        <FormBody>
          <SelectedImage selected={thumbnail} />
          <FormSearchImage
            value={thumbnail}
            onChange={(file) => changeThumbnail(file)}
            label='Profile'
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
          <FormButton
            onClick={() => {
              galleryHandler.queryCreateGallery(title, description, thumbnail);
              close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
