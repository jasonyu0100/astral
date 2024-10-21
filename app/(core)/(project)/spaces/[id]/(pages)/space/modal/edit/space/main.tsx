import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { ButtonVariant, FormButton } from '@/ui/form/button/main';
import { FormSearchImage } from '@/ui/form/file/search/search-image/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useEffect, useState } from 'react';

export function SpacesSpaceEditSpaceModal() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [thumbnail, setThumbnail] = useState<FileElem>(exampleFileElem);

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setTitle(spaceMainController.state.obj.title);
      setDescription(spaceMainController.state.obj.description);
      setObjective(spaceMainController.state.obj.objective);
      setThumbnail(spaceMainController.state.obj.thumbnail);
    }
  }, [spaceMainController.state.obj]);

  async function editSpace() {
    const payload = {
      ...spaceMainController.state.obj,
      title,
      description,
      objective,
      thumbnail,
    };
    const space = await spaceMainController.actions.editActions.edit(payload);
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Edit Space</FormTitle>
          <FormBody>
            <FormSearchImage
              fileElem={thumbnail}
              onChange={(file) => setThumbnail(file)}
              label='Theme'
            />
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormTextArea
              title='Objective'
              rows={5}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
          </FormBody>
          <FormFooter>
            <FormButton variant={ButtonVariant.PRIMARY} onClick={editSpace}>
              Edit
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
