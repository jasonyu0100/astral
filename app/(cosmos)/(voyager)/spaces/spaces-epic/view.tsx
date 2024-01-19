import { SpacesSpace } from './list/space/main';
import { SpacesHeader } from './header/main';
import { SpacesList } from './list/main';
import { SpacesContainer } from './main';
import { SpacesHeaderAction } from './header/action/main';
import { SpacesAlbumInfo } from './header/album-info/main';
import { SpacesHeaderCover } from './header/album-info/cover/main';
import { SpacesHeaderText } from './header/album-info/text/main';
import { SpacesHeaderTextMain } from './header/album-info/text/main/main';
import { SpacesHeaderTextSub } from './header/album-info/text/sub/main';
import { SpaceWrapper } from './wrapper/main';
import { useContext } from 'react';
import { SpacesContext, SpaceViewProps } from '../(stages)/now/page';
import { SpacesModalsView } from './modal/view';
import { SpacesModalContext } from './modal/main';

export function SpacesView({ type }: SpaceViewProps) {
  const { spaces } = useContext(SpacesContext);
  const { createSpace: createSpaceModal } = useContext(SpacesModalContext);

  return (
    <SpaceWrapper>
      <SpacesModalsView/>
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
              createSpaceModal.openModal();
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
