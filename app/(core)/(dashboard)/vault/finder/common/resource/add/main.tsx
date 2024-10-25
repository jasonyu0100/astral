import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { ButtonInputProps } from '@/props/main';
import { glassFx, roundedFx } from '@/style/data';
import { ResourceContainer } from '../common/container/main';

export function CollectionResourceAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <ResourceContainer className='w-full'>
        <GlassWindowFrame
          className='aspect-square w-1/2'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents className='flex h-full w-full items-center justify-center bg-blue-500'>
            <AstralAddIcon className='h-1/2 w-1/2' />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </ResourceContainer>
    </button>
  );
}
