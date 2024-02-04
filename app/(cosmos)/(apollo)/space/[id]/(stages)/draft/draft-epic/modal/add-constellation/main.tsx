import { FormTextArea } from "@/(common)/form/area/main";
import { FormBody } from "@/(common)/form/body/main";
import { FormButton } from "@/(common)/form/button/main";
import { FormFooter } from "@/(common)/form/footer/main";
import { FormInput } from "@/(common)/form/input/main";
import { FormContainer } from "@/(common)/form/main";
import { FormTitle } from "@/(common)/form/title/main";
import { Modal } from "@/(common)/modal/main";
import { useContext, useState } from "react";
import { DraftContext } from "../../../page";
import { DraftModalContext } from "../main";
import { FormSelect } from "@/(common)/form/select/main";
import { ConstellationVariant } from "@/tables/draft/constellation/main";

export function DraftAddConstellationModal() {
  const { constellationHandler } =
    useContext(DraftContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [variant, changeVariant] = useState(ConstellationVariant.VISUAL as string);
  const { addConstellation } = useContext(DraftModalContext)

  return (
    <Modal isOpen={addConstellation.opened} onClose={() => addConstellation.close()}>
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
            <option value={ConstellationVariant.TEXT}>
              {ConstellationVariant.TEXT}
            </option>
            <option value={ConstellationVariant.SOUND}>
              {ConstellationVariant.SOUND}
            </option>
            <option value={ConstellationVariant.MIXED}>
              {ConstellationVariant.MIXED}
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
              constellationHandler.queryCreateConstellation(title, description, variant)
              addConstellation.close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
