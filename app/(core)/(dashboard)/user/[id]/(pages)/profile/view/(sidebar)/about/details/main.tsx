import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { useContext, useEffect, useState } from 'react';

export function UserProfileAboutDetails() {
  const profileUser = useContext(ContextForProfileUserObj);
  const [displayName, setDisplayName] = useState(
    profileUser?.displayName || 'DisplayName',
  );
  const [email, setEmail] = useState(profileUser?.email);

  useEffect(() => {
    if (profileUser) {
      setDisplayName(profileUser.displayName);
      setEmail(profileUser.email);
    }
  }, [profileUser]);

  return (
    <>
      <img
        className='aspect-square h-[250px] w-[250px] rounded-full'
        src={profileUser.dp?.src || exampleFileElem.src}
      />
      <div className='flex w-full flex-col'>
        <p className='text-xl font-bold text-white'>{displayName}</p>
        <p className='font-light text-white'>{email}</p>
      </div>
    </>
  );
}
