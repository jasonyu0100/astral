import { ButtonInputProps } from '@/(components)/types/main';
import { AddIcon } from './icon/main';
import { AddLabel } from './label/main';

export function CollectionResourceAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <div className='flex aspect-[40/16] h-[120px] flex-row items-center space-x-[3rem]'>
        <AddIcon />
        <AddLabel />
      </div>
    </button>
  );
}
