import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import Link from 'next/link';
import { useState } from 'react';

export function ElementWebsite({ url, title }: { url: string; title: string }) {
  const [iframeError, setIframeError] = useState(false);

  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded']}
      borderFx={borderFx['border-around']}
      className='h-[3rem] w-full'
    >
      <GlassWindowContents className='flex flex-row items-center'>
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-slate-300'>{title || 'Untitled'}</p>
        </div>
        <div className='flex w-full items-center justify-center'>
          <Link
            className='font-bold text-blue-500'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <AstralLinkIcon />
          </Link>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
