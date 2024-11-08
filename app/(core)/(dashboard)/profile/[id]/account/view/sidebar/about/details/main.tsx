import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ContextForProfileUserObj } from '@/architecture/model/user/main';
import { useContext, useEffect, useState } from 'react';

export function ProfileAboutDetails() {
  const profileUser = useContext(ContextForProfileUserObj);
  const [displayPicture, setDisplayPicture] = useState(
    profileUser?.dp || exampleFileElement,
  );
  const [displayName, setDisplayName] = useState(
    profileUser?.displayName || 'DisplayName',
  );
  const [email, setEmail] = useState(profileUser?.email || 'Email');

  useEffect(() => {
    if (profileUser) {
      setDisplayName(profileUser.displayName);
      setEmail(profileUser.email);
      setDisplayPicture(profileUser.dp || exampleFileElement);
    }
  }, [profileUser]);

  return (
    <>
      <img
        className='aspect-square h-[250px] w-[250px] rounded-full'
        src={displayPicture.src}
      />
      <div className='flex w-full flex-col'>
        <p className='text-xl font-bold text-white'>{displayName}</p>
        <p className='font-light text-white'>{email}</p>
      </div>
    </>
  );
}
