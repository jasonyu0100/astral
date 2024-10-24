import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { glassFx, roundedFx } from '@/style/data';
import Link from 'next/link';

export function ElementWebsite({ url, title }: { url: string; title: string }) {
  return (
    <GlassWindowFrame roundedFx={roundedFx['rounded']}>
      <GlassWindowContents className='px-[1rem]'>
        <Link
          className='flex flex-row items-center justify-center space-x-[0.5rem] whitespace-nowrap font-bold text-slate-300'
          href={url}
          target='_blank'
        >
          <p className='max-w-[9rem] overflow-hidden'>{title || 'Untitled'}</p>
          <AstralLinkIcon />
        </Link>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
