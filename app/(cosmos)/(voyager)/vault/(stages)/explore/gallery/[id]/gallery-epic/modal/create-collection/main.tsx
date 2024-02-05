import { FormBody } from "@/(common)/form/body/main";
import { FormButton } from "@/(common)/form/button/main";
import { FormDescription } from "@/(common)/form/description/main";
import { FormFooter } from "@/(common)/form/footer/main";
import { FormInput } from "@/(common)/form/input/main";
import { FormContainer } from "@/(common)/form/main";
import { FormTitle } from "@/(common)/form/title/main";
import { FormUploadFiles } from "@/(common)/form/upload/upload-files/main";
import { Modal } from "@/(common)/modal/main";
import { FileObj } from "@/tables/file/main";
import { useContext, useState } from "react";
import { ExploreGalleryContext } from "../../../page";
import { GalleryModalContext } from "../main";

export function CreateCollectionModal() {
  const { collectionHandler } = useContext(
    ExploreGalleryContext,
  );
  const { createCollection: createCollectionModal } = useContext(GalleryModalContext)
  const [name, changeName] = useState('');
  const [files, changeFiles] = useState([] as FileObj[]);
  
  return (
    <Modal isOpen={createCollectionModal.opened} onClose={() => createCollectionModal.close()}>
      <FormContainer>
        <FormTitle>Create Collection</FormTitle>
        <FormBody>
          <FormInput
            placeholder='Name'
            title='Name'
            value={name}
            onChange={(e) => changeName(e.target.value)}
          />
          <FormUploadFiles onChange={(files) => changeFiles(files)} label={"Files"}/>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              collectionHandler.queryCreateCollection(name, files);
              createCollectionModal.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
