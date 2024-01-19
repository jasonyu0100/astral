import { SpacesSpace } from './list/space/main';
import { SpacesHeader } from './header/main';
import { SpacesList } from './list/main';
import { SpacesContainer } from './main';
import { SpacesHeaderAction } from './header/action/main';
import { SpacesAlbumInfo } from './header/album-info/main';
import { spaceMap } from '../../../(apollo)/space/[id]/map';
import { SpaceCount } from './list/space/count/main';
import { SpaceDate } from './list/space/date/main';
import { SpaceDay } from './list/space/day/main';
import { SpaceGenre } from './list/space/genre/main';
import { SpaceInfo } from './list/space/info/main';
import { SpacesHeaderCover } from './header/album-info/cover/main';
import { SpacesHeaderText } from './header/album-info/text/main';
import { SpacesHeaderTextMain } from './header/album-info/text/main/main';
import { SpacesHeaderTextSub } from './header/album-info/text/sub/main';
import { spaceTable } from '@/tables/space/table';
import { SpaceWrapper } from './wrapper/main';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { SpacesContext, SpaceViewProps } from '../(stages)/now/page';

export function SpacesView({ type }: SpaceViewProps) {
  const { spaces, addSpace } = useContext(SpacesContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [showModal, changeShowModal] = useState(false);

  return (
    <SpaceWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <FormContainer>
          <FormTitle>Create Space</FormTitle>
          <FormBody>
            <FormDescription>Create your space here</FormDescription>
            <FormInput
              placeholder='Name'
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
                addSpace(title, description);
                changeShowModal(false);
                alert('Submit Idea');
              }}
            >
              Submit Idea
            </FormButton>
          </FormFooter>
        </FormContainer>
      </Modal>
      <SpacesContainer>
        <SpacesHeader>
          <SpacesAlbumInfo>
            <SpacesHeaderCover />
            <SpacesHeaderText>
              <SpacesHeaderTextMain>{type}</SpacesHeaderTextMain>
              <SpacesHeaderTextSub>Shared</SpacesHeaderTextSub>
            </SpacesHeaderText>
          </SpacesAlbumInfo>
          <SpacesHeaderAction
            onClick={() => {
              changeShowModal(true);
            }}
          />
        </SpacesHeader>
        <SpacesList>
          {spaces.map((space, index) => (
            <SpacesSpace space={space} index={index}/>
          ))}
        </SpacesList>
      </SpacesContainer>
    </SpaceWrapper>
  );
}
