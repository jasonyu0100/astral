import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext, useState } from 'react';
import { MapModalContext } from '../../main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { PartVariant } from '@/(types)/model/map/part/main';
import { PartsHandlerContext } from '@/(types)/handler/parts/main';

export function MapAddPartModal() {
  const partsHandler = useContext(PartsHandlerContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [variant, changeVariant] = useState(
    PartVariant.VISUAL as string,
  );
  const modalContext = useContext(MapModalContext);
  const { opened, close } = modalContext.addPartModal;

  return (
    <Modal
      isOpen={opened}
      onClose={() => close()}
    >
      <FormContainer>
        <FormTitle>Add Part</FormTitle>
        <FormBody>
          <FormSelect
            title='Variant'
            value={variant}
            onChange={(e) => changeVariant(e.target.value)}
          >
            <option value={PartVariant.VISUAL}>
              {PartVariant.VISUAL}
            </option>
            <option value={PartVariant.LINK}>
              {PartVariant.LINK}
            </option>
            <option value={PartVariant.AUDIO}>
              {PartVariant.AUDIO}
            </option>
            <option value={PartVariant.MEMO}>
              {PartVariant.MEMO}
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
              partsHandler.partActions.createPart(
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
