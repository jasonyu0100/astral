import { FormBody } from '@/(pkgs)/(form)/body/main';
import { FormButton } from '@/(pkgs)/(form)/button/main';
import { FormFooter } from '@/(pkgs)/(form)/footer/main';
import { FormInput } from '@/(pkgs)/(form)/input/main';
import { FormContainer } from '@/(pkgs)/(form)/main';
import { FormTitle } from '@/(pkgs)/(form)/title/main';
import { FormUploadFiles } from '@/(pkgs)/(form)/file/upload/upload-files/main';
import { Modal } from '@/(pkgs)/(modal)/main';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { useContext, useState } from 'react';
import { ArchiveExplorerCreateModalContext } from '../main';
import { CollectionsHandlerContext } from '@/(lgx)/internal/handler/explorer/collections/main';

export function ExplorerCreateCollectionModal() {
  const collectionsHandler = useContext(CollectionsHandlerContext);
  const modalContext = useContext(ArchiveExplorerCreateModalContext);
  const { opened, close } = modalContext.createCollection;
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
              collectionsHandler.collectionActions.createCollection(
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

