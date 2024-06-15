import { TimerComponent } from '@/(components)/(timer)/main';

export function SpaceFlowHeaderRight() {
  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <TimerComponent />
    </div>
  );
}
