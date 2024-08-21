import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import { useContext } from 'react';

export function SpaceProgressHeaderRight() {
  const spaceController = useContext(ContextForSpaceMain);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <div className='rounded-md bg-blue-500 px-[1rem] py-[0.5rem]'>
        <p className='font-bold text-slate-300'>End Session</p>
      </div>
      {/* <TimerComponent hours={spaceController.state.obj.hours} /> */}
    </div>
  );
}
