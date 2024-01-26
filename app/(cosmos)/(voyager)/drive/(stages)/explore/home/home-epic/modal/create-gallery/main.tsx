import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormUploadFile } from '@/(common)/form/upload-file/main';
import { Modal } from '@/(common)/modal/main';
import { FileObj } from '@/tables/file/main';
import { useContext, useEffect, useState } from 'react';
import { ExploreHomeContext } from '../../../page';
import { HomeModalContext } from '../main';

export function CreateGalleryModal() {
  const { createGallery: createGalleryModal } = useContext(HomeModalContext);
  const { galleryHandler } = useContext(ExploreHomeContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);

  return (
    <Modal
      isOpen={createGalleryModal.opened}
      onClose={() => createGalleryModal.close()}
    >
      <FormContainer>
        <FormTitle>Create Gallery</FormTitle>
        <FormBody>
          <FormDescription>Create your gallery here!</FormDescription>
          <FormInput
            placeholder='Title'
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
          <FormUploadFile onChange={(file) => changeThumbnail(file)} />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              galleryHandler.queryCreateGallery(title, description, thumbnail);
              createGalleryModal.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
