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
import { ArchiveSidebarCreateModalContext } from '../main';
import { GallerysHandlerContext } from '@/(model)/(controller)/(archive)/explorer/gallerys/main';

export function SidebarCreateGalleryModal() {
  const modalContext = useContext(ArchiveSidebarCreateModalContext);
  const { opened, close } = modalContext.createGallery;
  const gallerysHandler = useContext(GallerysHandlerContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileElem);

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
    </PolaroidModal>
  );
}
