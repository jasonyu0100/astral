import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { HorizonsHorizonSidebarHeader } from './header/main';
import {
  HorizonHorizonSidebarItemHeader,
  KarmaState,
} from './item/header/main';

export function HorizonHorizonSidebar() {
  const arrivingSoon = [
    {
      title: 'Members discussing the future',
      karma: KarmaState.Waxing,
      time: 'Arriving in 5 minutes',
    },
    {
      title: 'Members discussing the future',
      karma: KarmaState.Waxing,
      time: 'Arriving in 5 minutes',
    },
    {
      title: 'Keep growing your network',
      karma: KarmaState.Waxing,
      time: 'Arriving in 5 minutes',
    },
  ];

  return (
    <GlassAreaContainer
      name={HorizonHorizonSidebar.name}
      sizeFx='w-[360px] h-full flex-shrink-0'
      className={`flex flex-col `}
      glassFx={glassFx['glass-10']}
    >
      <HorizonsHorizonSidebarHeader />
      <div className='flex h-full flex-col space-y-[1rem] overflow-auto p-[1rem]'>
        {arrivingSoon.map((post) => (
          <HorizonHorizonSidebarItemHeader
            title={post.title}
            karma={post.karma}
            time={post.time}
          />
        ))}
      </div>
    </GlassAreaContainer>
  );
}
