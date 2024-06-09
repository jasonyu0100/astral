import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { FormInput } from '@/(components)/(form)/input/main';
import { ContextForCollectionResourceObj } from '@/(model)/gallery/collection/resource/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export function ExplorerEditGalleryModal() {
  const { opened, close } = useContext(ContextForOpenable);
  const resource = useContext(ContextForCollectionResourceObj);
  const [title, changeTitle] = useState(resource.title);
  const [description, changeDescription] = useState(resource.description);

  async function updateGallery() {
    alert("TODO")
  }

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Gallery</FormTitle>
        <FormBody>
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
              updateGallery().then(() => {
                close();
              });
            }}
          >
            Save
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
