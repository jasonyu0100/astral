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
import { SpaceType } from '@/tables/space/main';

export function CreateSpaceModal() {
  const { spacesHandler } = useContext(SpacesContext);
  const { createSpace } = useContext(SpacesModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);
  const [type, changeType] = useState(SpaceType.SONG as String)

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
            value={type}
            onChange={(e) => changeType(e.target.value)}
          >
            <option value={SpaceType.BAR}>
              {SpaceType.BAR}
            </option>
            <option value={SpaceType.MIX}>
              {SpaceType.MIX}
            </option>
            <option value={SpaceType.SONG}>
              {SpaceType.SONG}
            </option>
            <option value={SpaceType.CUSTOM}>
              {SpaceType.CUSTOM}
            </option>
          </FormSelect>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              spacesHandler.queryCreateSpace(title, description, thumbnail);
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
