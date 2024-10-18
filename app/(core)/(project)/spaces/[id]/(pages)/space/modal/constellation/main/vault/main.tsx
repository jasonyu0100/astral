import { useControllerForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { useControllerForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { useControllerForGalleryMain } from '@/(server)/controller/gallery/main';
import { useGlobalUser } from '@/logic/store/user/main';

export function SpacesSpaceSearchVaultContent() {
  const user = useGlobalUser((state) => state.user);
  const galleryController = useControllerForGalleryMain(user.journalId);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryController.state.objId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  console.log(collectionListController.state.objs);

  return (
    <div className='grid w-full grid-cols-5 gap-[2rem]'>
      {resourceListController.state.objs.map((resource) => (
        <div className='aspect-square '>
          <img src={resource?.fileElem?.src} />
        </div>
      ))}
    </div>
  );
}
