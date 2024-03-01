import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { useContext, useState } from 'react';
import { DisplayImage } from '@/(components)/(form)/display-image/main';
import { FormSearchImage } from '@/(components)/(form)/search-image/main';
import { ExplorerHomeContext } from '@/(cx)/(studio)/archive/(archive-stages)/explorer/gallerys-view/page';
import { ArchiveExplorerModalContext } from '../../main';

export function ExplorerCreateGalleryModal() {
  const modalContext = useContext(ArchiveExplorerModalContext);
  const { opened, close } = modalContext.createGallery;
  const { galleryHandler } = useContext(ExplorerHomeContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Create Gallery</FormTitle>
        <FormBody>
          <DisplayImage selected={thumbnail} />
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
