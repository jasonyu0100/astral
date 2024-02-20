import { ButtonInputProps } from '@/(common)/types/main';
import { AddIcon } from './icon/main';
import { AddLabel } from './label/main';

export function CollectionResourceAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <div className='flex aspect-[40/16] h-[150px] flex-row items-center space-x-[3rem]'>
        <AddIcon/>
        <AddLabel/>
      </div>
    </button>
  );
}
