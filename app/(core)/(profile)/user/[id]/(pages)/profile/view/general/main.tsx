import { UserProfileGeneralBacks } from './backs/main';
import { UserProfileGeneralFeatures } from './features/main';
import { UserProfileGeneralWork } from './work/main';

export function UserProfileGeneralMain() {
  return (
    <>
      <div className='h-full w-full px-[2rem] pb-[1rem] pt-[2rem]'>
        <div className='h-full w-full overflow-auto'>
          <div className='flex w-full flex-col space-y-[3rem] p-[1rem]'>
            <UserProfileGeneralWork />
            <div className='flex flex-col space-y-[3rem] px-[1rem]'>
              <UserProfileGeneralFeatures />
              <UserProfileGeneralBacks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
