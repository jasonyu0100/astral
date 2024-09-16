import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useContext, useState } from 'react';
import { CommonSidebarFriends } from '../../common/friends/main';
import { CommonSidebarMinimisedFriendsAdd } from '../add/main';

export function CommonSidebarMinimisedFriendsWIP() {
  const [tempFriends, setTempFriends] = useState(exampleFileElems);
  const mapController = useContext(ContextForSpacesMap);

  return (
    <CommonSidebarFriends>
      {tempFriends.map((fileElem) => (
        <div
          onClick={() => {
            mapController.actions.autoSort();
            console.log('clicked');
          }}
        >
          <UserDisplayPictureElement fileElem={fileElem} />
        </div>
      ))}
      <div
        onClick={() => setTempFriends([...tempFriends, exampleFileElems[0]])}
      >
        <CommonSidebarMinimisedFriendsAdd />
      </div>
    </CommonSidebarFriends>
  );
}
