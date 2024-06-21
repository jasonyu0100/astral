import { TimerComponent } from '@/(components)/(timer)/main';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import { useContext } from 'react';

export function SpaceChatHeaderRight() {
  const spaceController = useContext(ContextForSpaceMain);
  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <TimerComponent hours={spaceController.state.obj.hours} />
    </div>
  );
}
