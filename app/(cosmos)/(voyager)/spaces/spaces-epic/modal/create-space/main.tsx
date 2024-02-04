import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { SpacesContext } from '../../../(stages)/now/page';
import { SpacesModalContext } from '../main';
import { FormSearchImage } from '@/(common)/form/search-image/main';
import { FileObj } from '@/tables/file/main';
import { SelectedImage } from '@/(common)/form/selected-image/main';
import { FormSelect } from '@/(common)/form/select/main';
import { SpaceVariant } from '@/tables/space/main';

export function CreateSpaceModal() {
  const { spacesHandler } = useContext(SpacesContext);
  const { createSpace } = useContext(SpacesModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);
  const [variant, changeVariant] = useState<string>(SpaceVariant.SONG)

  return (
    <Modal isOpen={createSpace.opened} onClose={() => createSpace.close()}>
      <FormContainer>
        <FormTitle>Create Space</FormTitle>
        <FormBody>
          <SelectedImage selected={thumbnail}/>
          <FormSearchImage onChange={(file) => changeThumbnail(file)} label="Profile"/>
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
          <FormSelect
            title='Type'
            value={variant}
            onChange={(e) => changeVariant(e.target.value)}
          >
            <option value={SpaceVariant.BAR}>
              {SpaceVariant.BAR}
            </option>
            <option value={SpaceVariant.MIX}>
              {SpaceVariant.MIX}
            </option>
            <option value={SpaceVariant.SONG}>
              {SpaceVariant.SONG}
            </option>
            <option value={SpaceVariant.CUSTOM}>
              {SpaceVariant.CUSTOM}
            </option>
          </FormSelect>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              spacesHandler.queryCreateSpace(title, description, thumbnail, variant);
              createSpace.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
