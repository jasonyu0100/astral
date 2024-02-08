'use client';
import { ProfileModalsView } from '../../(modals)/profile-modal/view';
import { ProfileModalContext, useProfileModal } from '../../(modals)/profile-modal/main';

export default function Page() {
  const modalContext = useProfileModal();
  return (
    <ProfileModalContext.Provider value={modalContext}>
      <div className='h-full w-full p-[4rem]'>
        <button
          className='bg-blue-500'
          onClick={() => modalContext.editProfileModal.open()}
        >
          CLICK ME
        </button>
        <ProfileModalsView />
      </div>
    </ProfileModalContext.Provider>
  );
}
