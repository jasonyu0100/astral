import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { DraftContext } from '../../../(apollo)/space/[id]/(stages)/draft/page';
import { DraftModalContext } from '../main';
import { FormSelect } from '@/(common)/form/select/main';
import { ConstellationVariant } from '@/(ouros)/(model)/draft/constellation/main';

export function DraftAddConstellationModal() {
  const { constellationHandler } = useContext(DraftContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [variant, changeVariant] = useState(
    ConstellationVariant.VISUAL as string,
  );
  const modalContext = useContext(DraftModalContext);
  const { opened, close } = modalContext.addConstellationModal;

  return (
    <Modal
      isOpen={opened}
      onClose={() => close()}
    >
      <FormContainer>
        <FormTitle>Add Constellation</FormTitle>
        <FormBody>
          <FormSelect
            title='Variant'
            value={variant}
            onChange={(e) => changeVariant(e.target.value)}
          >
            <option value={ConstellationVariant.VISUAL}>
              {ConstellationVariant.VISUAL}
            </option>
            <option value={ConstellationVariant.LINK}>
              {ConstellationVariant.LINK}
            </option>
            <option value={ConstellationVariant.AUDIO}>
              {ConstellationVariant.AUDIO}
            </option>
            <option value={ConstellationVariant.MEMO}>
              {ConstellationVariant.MEMO}
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
              constellationHandler.queryCreateConstellation(
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
    </Modal>
  );
}
