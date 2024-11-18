'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { HomeCampaignNumberPlay } from './play/main';
import { HomeCampaignNumberText } from './text/main';

export function HomeCampaignRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <HomeCampaignNumberPlay /> : <HomeCampaignNumberText />}
    </div>
  );
}
