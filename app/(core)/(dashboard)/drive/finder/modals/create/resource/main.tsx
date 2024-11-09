import { ContextForGalleryCollectionMain } from '@/architecture/controller/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { FileElement } from '@/architecture/model/elements/file/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralUploadFile } from '@/components/form/upload/upload-file/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useState } from 'react';

export function DriveFinderCreateResourceModal() {
  const collectionMainController = useContext(ContextForGalleryCollectionMain);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileElement);

  async function createResource() {
    resourceListController.actions.createActions
      .createFromFile(
        user.id,
        collectionMainController.state.objId,
        name,
        description,
        file,
      )
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Add Resource</AstralModalTitle>
              <AstralUploadFile
                onChange={(file) => changeFile(file)}
                label='File'
              />
              <AstralTextLineInput
                title='Title'
                placeholder='Enter a title for your media'
                value={name}
                onChange={(e) => changeName(e.target.value)}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter a description for your media'
                rows={5}
                value={description}
                onChange={(e) => changeDescription(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={createResource}>
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
