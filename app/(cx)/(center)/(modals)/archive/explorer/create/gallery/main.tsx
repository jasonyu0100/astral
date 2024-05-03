import { FormTextArea } from '@/(pkgs)/(form)/area/main';
import { FormBody } from '@/(pkgs)/(form)/body/main';
import { FormButton } from '@/(pkgs)/(form)/button/main';
import { FormFooter } from '@/(pkgs)/(form)/footer/main';
import { FormInput } from '@/(pkgs)/(form)/input/main';
import { FormContainer } from '@/(pkgs)/(form)/main';
import { FormTitle } from '@/(pkgs)/(form)/title/main';
import { Modal } from '@/(pkgs)/(modal)/main';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { useContext, useState } from 'react';
import { FormSearchImage } from '@/(pkgs)/(form)/file/search/search-image/main';
import { ArchiveExplorerCreateModalContext } from '../main';
import { GallerysHandlerContext } from '@/(lgx)/internal/handler/explorer/gallerys/main';

export function ExplorerCreateGalleryModal() {
  const modalContext = useContext(ArchiveExplorerCreateModalContext);
  const { opened, close } = modalContext.createGallery;
  const gallerysHandler = useContext(GallerysHandlerContext)
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
