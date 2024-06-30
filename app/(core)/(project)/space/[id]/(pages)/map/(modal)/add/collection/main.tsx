import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormUploadFiles } from '@/(components)/(form)/file/upload/upload-files/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { useContext, useState } from 'react';

export function SpaceMapCreateCollectionModal() {
  const user = useGlobalUser((state) => state.user);
  const galleryController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListHandler = useControllerForCollectionResourceList('');
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [files, changeFiles] = useState([] as FileElem[]);

  async function createCollection() {
    collectionListController.actions.createActions
      .createCollection(title, description, galleryController.state.objId)
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
        ).then(() => {
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
