import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElem, FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/internal/store/user/main';
import { FormTextArea } from '@/ui/(form)/area/main';
import { FormBody } from '@/ui/(form)/body/main';
import { FormButton } from '@/ui/(form)/button/main';
import { FormSearchImage } from '@/ui/(form)/file/search/search-image/main';
import { FormUploadFile } from '@/ui/(form)/file/upload/upload-file/main';
import { FormFooter } from '@/ui/(form)/footer/main';
import { FormInput } from '@/ui/(form)/input/main';
import { FormContainer } from '@/ui/(form)/main';
import { FormSelect } from '@/ui/(form)/select/main';
import { FormTitle } from '@/ui/(form)/title/main';
import { HorizontalDivider } from '@/ui/(indicator)/divider/horizontal/main';
import { PolaroidModal } from '@/ui/(modal)/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceMapAddResourceModal() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileElem);
  const [variant, changeVariant] = useState<FileElemVariant>(
    FileElemVariant.IMAGE,
  );

  async function createResource() {
    resourceListController.actions.createActions
      .createFromFile(
        user.id,
        collectionListController.state.objId,
        name,
        description,
        file,
      )
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Media</FormTitle>
          <FormBody>
            <FormSearchImage
              fileElem={file}
              onChange={(file) => changeFile(file)}
              label='Thumbnail'
            />
            <HorizontalDivider />
            <FormSelect
              value={variant}
              onChange={(e) => changeVariant(e.target.value as FileElemVariant)}
              title='Variant'
            >
              <option value={FileElemVariant.IMAGE}>Image</option>
              <option value={FileElemVariant.VIDEO}>Video</option>
              <option value={FileElemVariant.AUDIO}>Audio</option>
            </FormSelect>
            <FormUploadFile
              onChange={(file) => changeFile(file)}
              label='File'
              variant={variant}
            />
            <FormInput
              title='Title'
              value={name}
              onChange={(e) => changeName(e.target.value)}
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
            <FormButton onClick={createResource}>Upload</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
