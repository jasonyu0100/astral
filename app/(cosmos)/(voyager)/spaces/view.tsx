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
import { SpaceWrapper } from "./spaces-epic/wrapper/main";
import { FormTextArea } from "@/(common)/form/area/main";
import { FormBody } from "@/(common)/form/body/main";
import { FormButton } from "@/(common)/form/button/main";
import { FormDescription } from "@/(common)/form/description/main";
import { FormFooter } from "@/(common)/form/footer/main";
import { FormInput } from "@/(common)/form/input/main";
import { FormContainer } from "@/(common)/form/main";
import { FormTitle } from "@/(common)/form/title/main";
import { FormUploadFile } from "@/(common)/form/upload-file/main";
import { Modal } from "@/(common)/modal/main";
import { useState } from "react";
import { FileObj } from "../../../../server/graphql/API";

export function SpacesView({ type, spaces, addSpace }: SpaceViewProps) {
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [file, changeFile] = useState({} as FileObj);
  const [showModal, changeShowModal] = useState(false);

  return (
    <SpaceWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <FormContainer>
          <FormTitle>Upload File</FormTitle>
          <FormBody>
            <FormDescription>Upload your file here</FormDescription>
            <FormInput
              placeholder="Name"
              title="Name"
              value={name}
              onChange={(e) => changeName(e.target.value)}
            />
            <FormTextArea
              title="Description"
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: "none" }}
            />
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                addSpace(spaceTable.example);
                changeShowModal(false);
                alert("Submit Idea");
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
              changeShowModal(true)
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
    </SpaceWrapper>
  );
}
