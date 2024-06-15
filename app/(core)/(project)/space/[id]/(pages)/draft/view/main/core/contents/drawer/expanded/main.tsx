import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceDraftContentsDrawerExpanded({
  onToggle,
}: {
  onToggle: () => void;
}) {
  // const togglableController = useContext(ContextForTogglable);

  return (
    <div className='z-50 flex h-full w-full flex-col'>
      <div className='flex w-full items-center space-x-[1rem] p-[1rem]'>
        <p className='font-bold text-slate-300'>HOME</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => onToggle()}
          className='h-[2rem] w-[2rem] cursor-pointer'
          viewBox='0 0 24 24'
          fill='none'
        >
          <mask
            id='mask0_3264_5815'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_3264_5815)'>
            <path
              d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </div>
      <GlassWindowFrame
        className='h-full w-full overflow-auto'
        roundedFx={roundedFx['rounded-container']}
      >
        <GlassWindowContents className='space-x-[1rem flex w-full flex-row flex-wrap'>
          <div className='aspect-square h-[20rem] bg-white'>
            <img
              className='h-full w-full object-cover'
              src='https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ></img>
          </div>
          <div className='aspect-square h-[20rem] bg-white'>
            <img
              className='h-full w-full object-cover'
              src='https://plus.unsplash.com/premium_photo-1715071976245-b4ab72b6c48b?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ></img>
          </div>
          <div className='flex aspect-square h-[20rem] items-center justify-center bg-yellow-500'>
            <p className='font-bold text-black'>hello world test</p>
          </div>
          <div className='aspect-square h-[20rem] bg-white'>
            <img
              className='h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1717705422478-0b42e89e06b7?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ></img>
          </div>
          <div className='flex aspect-square h-[20rem] items-center justify-center bg-green-500'>
            <p className='font-bold text-black'>hello world test</p>
          </div>
          <div className='flex aspect-square h-[20rem] items-center justify-center bg-white'>
            <p className='text-3xl text-slate-500'>+</p>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
