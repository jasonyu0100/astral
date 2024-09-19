import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
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
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-20']}
    >
      <p className='text-xl font-bold text-slate-300'>Upcoming</p>
      <p className='text-md font-light text-slate-300'>Arriving soon</p>
      {arrivingSoon.map((post) => (
        <HorizonHorizonSidebarItemHeader
          title={post.title}
          karma={post.karma}
          time={post.time}
        />
      ))}
      <HorizontalDivider />
      <p className='text-md font-light text-slate-300'>Arriving in an hour</p>
      {arrivingSoon.map((post) => (
        <HorizonHorizonSidebarItemHeader
          title={post.title}
          karma={post.karma}
          time={post.time}
        />
      ))}
    </GlassAreaContainer>
  );
}
