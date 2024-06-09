import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { MapModalContext } from '../../main';
import { ContextForChapterSceneList } from '@/(model)/(controller)/space/chapter/scene/list';

export function MapAddSceneModal() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const modalContext = useContext(MapModalContext);
  const { opened, close } = modalContext.addSceneModal;

  return (
    <PolaroidModal
      isOpen={opened}
      onClose={() => close()}
    >
      <FormContainer>
        <FormTitle>Add Scene</FormTitle>
        <FormBody>
          <FormInput
            title='Name'
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
          <FormButton
            onClick={() => {
              sceneListController.actions.createActions.createScene(
                title,
                description,
              );
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
