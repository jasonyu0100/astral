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
import { FormSelect } from '@/(components)/(form)/select/main';
import { SpaceSceneVariant } from '@/(model)/space/chapter/scene/main';
import { ScenesHandlerContext } from '@/(controller)/scenes/main';

export function MapAddSceneModal() {
  const partsHandler = useContext(ScenesHandlerContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [variant, changeVariant] = useState(
    SpaceSceneVariant.VISUAL as string,
  );
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
          <FormSelect
            title='Variant'
            value={variant}
            onChange={(e) => changeVariant(e.target.value)}
          >
            <option value={SpaceSceneVariant.VISUAL}>
              {SpaceSceneVariant.VISUAL}
            </option>
            <option value={SpaceSceneVariant.LINK}>
              {SpaceSceneVariant.LINK}
            </option>
            <option value={SpaceSceneVariant.AUDIO}>
              {SpaceSceneVariant.AUDIO}
            </option>
            <option value={SpaceSceneVariant.MEMO}>
              {SpaceSceneVariant.MEMO}
            </option>
          </FormSelect>
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
              partsHandler.partActions.createScene(
                title,
                description,
                variant,
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
