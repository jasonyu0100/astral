import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import {
  ContextForFileChangable,
  useControllerForFileChangable,
} from '@/logic/contexts/fileChangable/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/(form)/area/main';
import { FormBody } from '@/ui/(form)/body/main';
import { FormButton } from '@/ui/(form)/button/main';
import { FormSearchImage } from '@/ui/(form)/file/search/search-image/main';
import { FormFooter } from '@/ui/(form)/footer/main';
import { FormInput } from '@/ui/(form)/input/main';
import { FormContainer } from '@/ui/(form)/main';
import { FormTitle } from '@/ui/(form)/title/main';
import { PolaroidModal } from '@/ui/(modal)/polaroid/main';
import { useContext, useState } from 'react';

export function ExplorerCreateGalleryModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const galleryListController = useContext(ContextForGalleryList);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const fileChangableController = useControllerForFileChangable();

  async function createGallery() {
    galleryListController.actions.createActions
      .createGallery(
        user.id,
        title,
        description,
        fileChangableController.fileElem,
      )
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForFileChangable.Provider value={fileChangableController}>
        <PolaroidModal>
          <FormContainer>
            <FormTitle>Create Gallery</FormTitle>
            <FormBody>
              <FormSearchImage
                fileElem={fileChangableController.fileElem}
                onChange={fileChangableController.updateFileElem}
                label='Thumbnail'
              />
              <FormInput
                title='Title'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
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
              <FormButton onClick={createGallery}>Create</FormButton>
            </FormFooter>
          </FormContainer>
        </PolaroidModal>
      </ContextForFileChangable.Provider>
    </ContextForOpenable.Provider>
  );
}
