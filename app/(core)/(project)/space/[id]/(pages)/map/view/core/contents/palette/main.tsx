import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { AddIcon } from './icons/add/main';
import { FileIcon } from './icons/file/main';
import { GenerateIcon } from './icons/generate/main';
import { LinkIcon } from './icons/link/main';
import { TextIcon } from './icons/text/main';

export function SpaceMapCoreContentsPalette() {
  return (
    <GlassWindowFrame
      className='w-full py-[2rem]'
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents className='flex flex-col items-center justify-center space-y-[1rem]'>
        <AddIcon />
        <TextIcon />
        <FileIcon />
        <LinkIcon />
        <GenerateIcon />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
