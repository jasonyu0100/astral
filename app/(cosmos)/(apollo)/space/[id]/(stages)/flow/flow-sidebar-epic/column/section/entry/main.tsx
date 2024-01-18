import { MomentObj } from '@/tables/flow/moment/main';

export function FlowSidebarEntry({ moment }: { moment: MomentObj }) {
  return (
    <div className='flex flex-row items-center space-x-[1rem]'>
      <div className='h-[50px] w-[50px] flex-shrink-0'>
        <img
          className='w-full h-full rounded-full'
          alt='test'
          src={moment.file.src}
        />
      </div>
      <p className='text-white font-bold text-lg'>{moment.title}</p>
    </div>
  );
}
