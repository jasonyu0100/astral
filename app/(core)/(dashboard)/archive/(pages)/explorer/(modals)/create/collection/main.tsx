import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { FormUploadFiles } from '@/(components)/(form)/file/upload/upload-files/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { useContext, useState } from 'react';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export function ExplorerCreateCollectionModal() {
  const user = useGlobalUser((state) => state.user);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const [listId, changeListId] = useState('' as string);
  const resourceListHandler = useControllerForCollectionResourceList('');
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [files, changeFiles] = useState([] as FileElem[]);

  async function createCollection() {
    collectionListController.actions.createActions
      .createCollection(title, description)
      .then(async (collection) => {
        await Promise.all(
          files.map((f) =>
            resourceListHandler.actions.createActions.createFromFile(
              user.id,
              collection.id,
              `${collection.title} - ${f.title}`,
              `${collection.title} - ${f.title}`,
              f,
            ),
          ),
        ).then((files) => {
          console.log(files);
          openableController.close();
        });
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
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
            <FormButton onClick={createCollection}>Create</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
