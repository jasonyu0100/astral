import { FormBody } from '@/(components)/(form)/body/main';
import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import { FileElem } from '@/(model)/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(model)/gallery/collection/resource/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForCollectionResourceList } from '@/(model)/(controller)/gallery/collection/resource/list';

export function ExplorerEditResourceModal() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const { opened, close } = useContext(ContextForOpenable);
  const resource = useContext(ContextForCollectionResourceObj);
  const [title, changeTitle] = useState(resource.title);
  const [description, changeDescription] = useState(resource.description);
  const [file, changeFile] = useState(resource?.fileElem || ({} as FileElem));

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>File</FormTitle>
        <FormBody>
          <FormUploadFile
            label='File'
            defaultFileElem={resource.fileElem}
            onChange={(file) => changeFile(file)}
          />
          <FormInput
            title='Title'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormInput
            title='Description'
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              resourceListController.actions.editActions
                .edit(resource.id, {
                  title,
                  description,
                  fileElem: file,
                })
                .then(() => {
                  close();
                });
            }}
          >
            Save
          </FormButton>
          <FormButton
            variant={ButtonVariant.SECONDARY}
            onClick={() => {
              resourceListController.actions.deleteActions
                .delete(resource.id)
                .then(() => {
                  close();
                });
            }}
          >
            Delete
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
