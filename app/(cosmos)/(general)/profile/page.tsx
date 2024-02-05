"use client"
import { ProfileModalsView } from './modal/view';
import { ProfileModalContext, useProfileModalContext } from './modal/main';

export default function Page() {
  const modalContext = useProfileModalContext()
  return (
    <ProfileModalContext.Provider value={modalContext}>
      <div className='p-[4rem] w-full h-full'>
        <button className="bg-blue-500" onClick={() => modalContext.editProfile.open()}>CLICK ME</button>
        <ProfileModalsView/>
      </div>
    </ProfileModalContext.Provider>
  );
}
