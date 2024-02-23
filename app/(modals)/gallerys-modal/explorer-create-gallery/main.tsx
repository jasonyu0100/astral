import { FormTextArea } from '@/(components)/form/area/main';
import { FormBody } from '@/(components)/form/body/main';
import { FormButton } from '@/(components)/form/button/main';
import { FormFooter } from '@/(components)/form/footer/main';
import { FormInput } from '@/(components)/form/input/main';
import { FormContainer } from '@/(components)/form/main';
import { FormTitle } from '@/(components)/form/title/main';
import { Modal } from '@/(components)/modal/main';
import { FileObj } from '@/(logic)/model/resource/file/main';
import { useContext, useState } from 'react';
import { GallerysModalContext } from '../main';
import { SelectedImage } from '@/(components)/form/selected-image/main';
import { FormSearchImage } from '@/(components)/form/search-image/main';
import { ExploreHomeContext } from '@/(cx)/(studio)/archive/(archive-stages)/explorer/gallerys-view/page';

export function ExplorerCreateGalleryModal() {
  const modalContext = useContext(GallerysModalContext);
  const { opened, close } = modalContext.explorerCreateGalleryModal;
  const { galleryHandler } = useContext(ExploreHomeContext);
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
