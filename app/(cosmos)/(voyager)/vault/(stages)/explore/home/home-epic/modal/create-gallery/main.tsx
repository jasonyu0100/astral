import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormUploadFile } from '@/(common)/form/upload-file/main';
import { Modal } from '@/(common)/modal/main';
import { FileObj } from '@/tables/file/main';
import { useContext, useState } from 'react';
import { ExploreHomeContext } from '../../../page';
import { HomeModalContext } from '../main';
import { SelectedImage } from '@/(common)/form/selected-image/main';
import { FormSearchImage } from '@/(common)/form/search-image/main';

export function CreateGalleryModal() {
  const { createGallery } = useContext(HomeModalContext);
  const { galleryHandler } = useContext(ExploreHomeContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);

  return (
    <Modal
      isOpen={createGallery.opened}
      onClose={() => createGallery.close()}
    >
      <FormContainer>
        <FormTitle>Create Gallery</FormTitle>
        <FormBody>
          <SelectedImage selected={thumbnail}/>
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
          <FormSearchImage onChange={(file) => changeThumbnail(file)} label="Profile"/>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              galleryHandler.queryCreateGallery(title, description, thumbnail);
              createGallery.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
