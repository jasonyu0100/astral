import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralAddIcon } from '@/icons/add/main';
import { ButtonInputProps } from '@/props/main';
import { ResourceContainer } from '../common/container/main';

export function CollectionResourceAdd({ ...props }: ButtonInputProps) {
  return (
    <div className='flex aspect-square w-full flex-col justify-between space-y-[1rem]'>
      <button {...props}>
        <ResourceContainer>
          <div className='flex h-full w-full items-center justify-center p-[1rem]'>
            <AstralRoundedActionButton>
              <AstralAddIcon className='h-[3rem] w-[3rem]' />
            </AstralRoundedActionButton>
          </div>
        </ResourceContainer>
      </button>
    </div>
  );
}
