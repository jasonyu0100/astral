import { FormTextArea } from '@/(lib)/(form)/area/main';
import { FormBody } from '@/(lib)/(form)/body/main';
import { FormButton } from '@/(lib)/(form)/button/main';
import { FormFooter } from '@/(lib)/(form)/footer/main';
import { FormInput } from '@/(lib)/(form)/input/main';
import { FormContainer } from '@/(lib)/(form)/main';
import { FormTitle } from '@/(lib)/(form)/title/main';
import { Modal } from '@/(lib)/(modal)/main';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { useContext, useState } from 'react';
import { DisplayImagePreview } from '@/(lib)/(form)/file/search/search-image/display-image-preview/main';
import { FormSearchImage } from '@/(lib)/(form)/file/search/search-image/main';
import { ArchiveSidebarCreateModalContext } from '../main';
import { GallerysHandlerContext } from '@/(lgx)/internal/handler/explorer/gallerys/main';

export function SidebarCreateGalleryModal() {
  const modalContext = useContext(ArchiveSidebarCreateModalContext);
  const { opened, close } = modalContext.createGallery;
  const gallerysHandler = useContext(GallerysHandlerContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Create Gallery</FormTitle>
        <FormBody>
          <FormSearchImage
            file={thumbnail}
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
              gallerysHandler.galleryActions.createGallery(title, description, thumbnail);
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
