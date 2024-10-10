import { useContext, useEffect, useState } from 'react';
import { ContextForUserProfile } from '../../../../controller/main';
import { ProfileAboutConnectAction } from './connect/main';
import { ProfileAboutEditAction } from './edit/main';

export function UserProfileAboutAction() {
  const {
    state: { adminMode },
  } = useContext(ContextForUserProfile);

  const [mode, setMode] = useState(false);

  useEffect(() => {
    setMode(adminMode);
  }, [adminMode]);

  return (
    <>
      {mode ? (
        <>
          <ProfileAboutEditAction />
        </>
      ) : (
        <div className='flex w-full flex-col space-y-[1rem]'>
          <ProfileAboutConnectAction />
        </div>
      )}
    </>
  );
}
