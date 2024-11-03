import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { useControllerForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { FileElement } from '@/architecture/model/elements/file/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralUploadFiles } from '@/components/form/upload/upload-files/main';
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

export function SpacesSceneAddCollectionModal() {
  const user = useGlobalUser((state) => state.user);
  const galleryController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListHandler = useControllerForCollectionResourceList('');
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [files, changeFiles] = useState([] as FileElement[]);

  async function createCollection() {
    collectionListController.actions.createActions
      .createCollection(title, description, galleryController.state.objId)
      .then(async (collection) => {
        await Promise.all(
          files.map((f) =>
            resourceListHandler.actions.createActions.createFromFile(
              user.id,
              collection.id,
              `${collection.title} - ${f.title}`,
              `${collection.title} - ${f.title}`,
              f,
            ),
          ),
        ).then(() => {
          openableController.close();
        });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Create Collection</AstralModalTitle>
              <AstralTextLineInput
                placeholder='Title'
                title='Title'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralTextAreaInput
                placeholder='Description'
                title='Description'
                value={description}
                onChange={(e) => changeDescription(e.target.value)}
              />
              <AstralUploadFiles
                onChange={(files) => changeFiles(files)}
                label={'Files'}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={createCollection}>
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
