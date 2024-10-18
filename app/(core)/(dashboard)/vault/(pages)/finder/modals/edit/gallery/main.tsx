import { ContextForGalleryMain } from '@/(server)/controller/gallery/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function VaultFinderEditGalleryModal() {
  const openableController = useContext(ContextForOpenable);
  const galleryController = useContext(ContextForGalleryMain);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  async function updateGallery() {
    alert('TODO');
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
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
                  openableController.close();
                });
              }}
            >
              Save
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
