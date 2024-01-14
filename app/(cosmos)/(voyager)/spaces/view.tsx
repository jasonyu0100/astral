import { SpacesSpace } from "./spaces-epic/list/space/main";
import { SpacesHeader } from "./spaces-epic/header/main";
import { SpacesList } from "./spaces-epic/list/main";
import { SpacesContainer } from "./spaces-epic/main";
import { SpacesHeaderAction } from "./spaces-epic/header/action/main";
import { SpacesAlbumInfo } from "./spaces-epic/header/album-info/main";
import { spaceMap } from "../../(apollo)/space/[id]/map";
import { SpaceCount } from "./spaces-epic/list/space/count/main";
import { SpaceDate } from "./spaces-epic/list/space/date/main";
import { SpaceDay } from "./spaces-epic/list/space/day/main";
import { SpaceGenre } from "./spaces-epic/list/space/genre/main";
import { SpaceInfo } from "./spaces-epic/list/space/info/main";
import { SpaceViewProps } from "./(stages)/all/page";
import { SpacesHeaderCover } from "./spaces-epic/header/album-info/cover/main";
import { SpacesHeaderText } from "./spaces-epic/header/album-info/text/main";
import { SpacesHeaderTextMain } from "./spaces-epic/header/album-info/text/main/main";
import { SpacesHeaderTextSub } from "./spaces-epic/header/album-info/text/sub/main";
import { spaceTable } from "@/tables/space/table";

export function SpacesView({ type, spaces, addSpace }: SpaceViewProps) {
  return (
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
            addSpace(spaceTable.example);
          }}
        />
      </SpacesHeader>
      <SpacesList>
        {spaces.map((space) => (
          <SpacesSpace>
            <SpaceCount />
            <SpaceInfo href={spaceMap.space.id.storm.link(space.id)} />
            <SpaceGenre />
            <SpaceDay />
            <SpaceDate />
          </SpacesSpace>
        ))}
      </SpacesList>
    </SpacesContainer>
  );
}
