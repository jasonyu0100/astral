'use client';
import { ProfileModalsView } from './modal/view';
import { ProfileModalContext, useProfileModalContext } from './modal/main';

export default function Page() {
  const modalContext = useProfileModalContext();
  return (
    <ProfileModalContext.Provider value={modalContext}>
      <div className='h-full w-full p-[4rem]'>
        <button
          className='bg-blue-500'
          onClick={() => modalContext.editProfile.open()}
        >
          CLICK ME
        </button>
        <ProfileModalsView />
      </div>
    </ProfileModalContext.Provider>
  );
}
