import { TimerComponent } from '@/(components)/(timer)/main';

export function SpaceDraftHeaderRight() {
  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      <TimerComponent />
    </div>
  );
}
