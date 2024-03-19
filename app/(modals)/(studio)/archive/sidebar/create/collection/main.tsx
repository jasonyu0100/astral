import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { FormUploadFiles } from '@/(components)/(form)/file/upload/upload-files/main';
import { Modal } from '@/(components)/(modal)/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { useContext, useState } from 'react';
import { ArchiveSidebarCreateModalContext } from '../main';
import { CollectionsHandlerContext } from '@/(logic)/internal/handler/explorer/collections/main';

export function SidebarCreateCollectionModal() {
  const collectionsHandler = useContext(CollectionsHandlerContext);
  const modalContext = useContext(ArchiveSidebarCreateModalContext);
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
              collectionsHandler.collectionActions.queryCreateCollection(
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

