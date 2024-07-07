import { FormBody } from '@/(components)/(form)/body/main';
import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext, useState } from 'react';

export function ExplorerEditResourceModal() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const openableController = useContext(ContextForOpenable);
  const resource = useContext(ContextForCollectionResourceObj);
  const [title, changeTitle] = useState(resource.title);
  const [description, changeDescription] = useState(resource.description);
  const [file, changeFile] = useState(resource?.fileElem || ({} as FileElem));

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>File</FormTitle>
          <FormBody>
            <FormUploadFile
              label='File'
              defaultFileElem={resource.fileElem}
              onChange={(file) => changeFile(file)}
            />
            <FormInput
              title='title'
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
                    openableController.close();
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
                    openableController.close();
                  });
              }}
            >
              Delete
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
