import { TimerComponent } from '@/(components)/(timer)/main';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import { useContext } from 'react';

export function SpaceMapHeaderRight() {
  const spaceController = useContext(ContextForSpaceMain);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      <TimerComponent hours={spaceController.state.obj.hours} />
    </div>
  );
}
