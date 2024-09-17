import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useContext } from 'react';
import { CommonSidebarFriends } from '../../common/friends/main';

export function CommonSidebarMinimisedFriends() {
  const mapController = useContext(ContextForSpacesMap);

  return (
    <CommonSidebarFriends>
      {exampleFileElems.map((fileElem) => (
        <div
          onClick={() => {
            mapController.actions.autoSort();
            console.log('clicked');
          }}
        >
          <UserDisplayPictureElement fileElem={fileElem} />
        </div>
      ))}
    </CommonSidebarFriends>
  );
}
