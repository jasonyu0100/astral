import { FormattedLink } from '@/(components)/(basic)/link/main';
import { learnMap } from './map';

export default function Page() {
  return (
    <div className='flex flex-col p-[2rem] space-y-[1rem]'>
      <h1 className='text-2xl font-bold text-white'>LEARN</h1>
      <FormattedLink href={learnMap.learn.compass.link}>Compass</FormattedLink>
      <FormattedLink href={learnMap.learn.domains.link}>Domains</FormattedLink>
      <FormattedLink href={learnMap.learn.fractal.link}>Fractal</FormattedLink>
      <FormattedLink href={learnMap.learn.map.link}>Map</FormattedLink>
      <FormattedLink href={learnMap.learn.month.link}>Month</FormattedLink>
      <FormattedLink href={learnMap.learn.queue.link}>Queue</FormattedLink>
      <FormattedLink href={learnMap.learn.timer.link}>Timer</FormattedLink>
    </div>
  );
}
