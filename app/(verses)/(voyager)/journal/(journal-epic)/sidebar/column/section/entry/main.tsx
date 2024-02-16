import { MomentObj } from '@/(ouros)/(model)/flow/moment/main';

export function FeedSidebarEntry({ moment }: { moment: MomentObj }) {
  return (
    <div className='flex flex-row items-center space-x-[1rem]'>
      <div className='h-[50px] w-[50px] flex-shrink-0'>
        <img
          className='h-full w-full rounded-full'
          alt='test'
          src={moment?.file?.src}
        />
      </div>
      <p className='text-lg font-bold text-white'>{moment.title}</p>
    </div>
  );
}
