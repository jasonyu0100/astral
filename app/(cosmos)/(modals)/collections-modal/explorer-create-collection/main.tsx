import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormUploadFiles } from '@/(common)/form/upload/upload-files/main';
import { Modal } from '@/(common)/modal/main';
import { FileObj } from '@/tables/resource/file/main';
import { useContext, useState } from 'react';
import { ExploreGalleryContext } from '../../../(voyager)/vault/(stages)/explorer/collections-view/[id]/page';
import { CollectionsModalContext } from '../main';

export function ExplorerCreateCollectionModal() {
  const { collectionHandler } = useContext(ExploreGalleryContext);
  const modalContext = useContext(CollectionsModalContext);
  const { opened, close } = modalContext.explorerCreateCollectionModal;
  const [name, changeName] = useState('');
  const [files, changeFiles] = useState([] as FileObj[]);

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Create Collection</FormTitle>
        <FormBody>
          <FormInput
            placeholder='Name'
            title='Name'
            value={name}
            onChange={(e) => changeName(e.target.value)}
          />
          <FormUploadFiles
            onChange={(files) => changeFiles(files)}
            label={'Files'}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              collectionHandler.queryCreateCollection(name, files);
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
