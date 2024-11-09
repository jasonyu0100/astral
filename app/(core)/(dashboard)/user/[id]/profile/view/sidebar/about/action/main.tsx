import { useContext, useEffect, useState } from 'react';
import { ContextForProfile } from '../../../../controller/main';
import { UserProfileAboutConnectAction } from './connect/main';
import { UserProfileAboutEditAction } from './edit/main';

export function UserProfileAboutAction() {
  const {
    state: { adminMode },
  } = useContext(ContextForProfile);

  const [mode, setMode] = useState(false);

  useEffect(() => {
    setMode(adminMode);
  }, [adminMode]);

  return (
    <>
      {mode ? (
        <>
          <UserProfileAboutEditAction />
        </>
      ) : (
        <div className='flex w-full flex-col space-y-[1rem]'>
          <UserProfileAboutConnectAction />
        </div>
      )}
    </>
  );
}
