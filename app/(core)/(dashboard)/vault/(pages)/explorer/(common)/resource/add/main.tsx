import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { ButtonInputProps } from '@/types/props/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
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
