import { ButtonInputProps } from '@/(common)/types/main';
import { AddIcon } from './icon/main';
import { AddLabel } from './label/main';
import { Aspect } from '@/(common)/aspect/main';

export function CollectionResourceAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <Aspect x={36} y={16} className='flex h-[120px] flex-row items-center space-x-[3rem]'>
        <AddIcon/>
        <AddLabel/>
      </Aspect>
    </button>
  );
}
