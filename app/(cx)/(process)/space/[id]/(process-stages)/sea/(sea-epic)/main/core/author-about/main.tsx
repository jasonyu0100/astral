export function StoryAuthorAbout() {
  return (
    <div className='absolute bottom-[20px]'>
      <div className='relative flex h-[50px] w-full flex-row items-center space-x-[2rem] px-[2rem]'>
        <div className='h-[50px] w-[50px] overflow-hidden rounded-[25px] bg-white'>
          <img
            className='h-full w-full'
            alt='test'
            src={`/brand/icon-bg-sm.png`}
          />
        </div>
        <p className='font-bold text-slate-300'>Jason</p>
        <p className='font-regular text-white'>21 hours ago</p>
      </div>
    </div>
  );
}
