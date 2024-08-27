import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ButtonInputProps } from '@/types/props/main';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { ResourceContainer } from '../common/container/main';

export function CollectionResourceAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <ResourceContainer className='aspect-square h-[200px]'>
        <GlassWindowFrame
          className='h-full w-full'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex h-full w-full items-center justify-center'>
            <AstralAddIcon className='h-1/2 w-1/2' />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </ResourceContainer>
    </button>
  );
}
