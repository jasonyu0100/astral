import { ProfileUserGeneralBacks } from './backs/main';
import { ProfileUserGeneralFeatures } from './features/main';
import { ProfileUserGeneralWork } from './work/main';

export function ProfileUserGeneralMain() {
  return (
    <>
      <div className='h-full w-full px-[2rem] pb-[1rem] pt-[2rem]'>
        <div className='h-full w-full overflow-auto'>
          <div className='flex w-full flex-col space-y-[3rem] p-[1rem]'>
            <ProfileUserGeneralWork />
            <div className='flex flex-col space-y-[3rem] px-[1rem]'>
              <ProfileUserGeneralFeatures />
              <ProfileUserGeneralBacks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
