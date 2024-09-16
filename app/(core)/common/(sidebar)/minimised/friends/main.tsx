import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useState } from 'react';
import { CommonSidebarFriends } from '../../common/friends/main';
import { CommonSidebarMinimisedFriendsAdd } from '../add/main';

export function CommonSidebarMinimisedFriendsWIP() {
  const [tempFriends, setTempFriends] = useState(exampleFileElems);

  return (
    <CommonSidebarFriends>
      {tempFriends.map((fileElem) => (
        <div
          onClick={() => {
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
