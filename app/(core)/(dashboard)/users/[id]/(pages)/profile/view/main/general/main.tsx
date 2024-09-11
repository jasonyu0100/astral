import { UserProfileGeneralWork } from './work/main';

export function UserProfileProfileMain() {
  return (
    <>
      <div className='h-full w-full px-[2rem] pb-[1rem] pt-[2rem]'>
        <div className='h-full w-full overflow-auto'>
          <div className='flex w-full flex-col space-y-[3rem] p-[1rem]'>
            <UserProfileGeneralWork />
          </div>
        </div>
      </div>
    </>
  );
}
