import { FormBody } from '@/(components)/form/body/main';
import { FormButton } from '@/(components)/form/button/main';
import { FormFooter } from '@/(components)/form/footer/main';
import { FormInput } from '@/(components)/form/input/main';
import { FormContainer } from '@/(components)/form/main';
import { FormTitle } from '@/(components)/form/title/main';
import { FormUploadFiles } from '@/(components)/form/upload/upload-files/main';
import { Modal } from '@/(components)/modal/main';
import { FileObj } from '@/(logic)/model/resource/file/main';
import { useContext, useState } from 'react';
import { CollectionsModalContext } from '../main';
import { ExploreGalleryContext } from '@/(cx)/(studio)/vault/(vault-stages)/explorer/collections-view/[id]/page';

export function ExplorerCreateCollectionModal() {
  const { collectionHandler } = useContext(ExploreGalleryContext);
  const modalContext = useContext(CollectionsModalContext);
  const { opened, close } = modalContext.explorerCreateCollectionModal;
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [files, changeFiles] = useState([] as FileObj[]);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Create Collection</FormTitle>
        <FormBody>
          <FormInput
            placeholder='Title'
            title='Title'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormInput
            placeholder='Description'
            title='Description'
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
          />
          <FormUploadFiles
            onChange={(files) => changeFiles(files)}
            label={'Files'}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              collectionHandler.queryCreateCollection(
                title,
                description,
                files,
              );
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

