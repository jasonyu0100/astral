import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { FormUploadFiles } from '@/(components)/(form)/file/upload/upload-files/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { FileElem } from '@/(model)/elements/file/main';
import { useContext, useState } from 'react';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForGalleryCollectionList } from '@/(model)/(controller)/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(model)/(controller)/gallery/collection/resource/list';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export function SidebarCreateCollectionModal() {
  const user = useGlobalUser((state) => state.user);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListHandler = useContext(ContextForCollectionResourceList);
  const { opened, close } = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [files, changeFiles] = useState([] as FileElem[]); 

   async function createCollection() {
    collectionListController.actions.createActions
      .createCollection(title, description)
      .then((collection) => {
        Promise.all(
          files.map((f) =>
            resourceListHandler.actions.createActions.createFromFile(
              user.id,
              `${collection.title} - ${f.title}`,
              `${collection.title} - ${f.title}`,
              f,
            ),
          ),
        );
        close();
      });
  }

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
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
            onClick={createCollection}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
