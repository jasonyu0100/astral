import { FormattedLink } from '@/(components)/(basic)/link/main';

export default function Page() {
  return (
    <div className='flex flex-col p-[2rem]'>
      <h1 className='text-xl font-bold text-white'>LEARN</h1>
      <FormattedLink href='/learn/compass'>Compass</FormattedLink>
      <FormattedLink href='/learn/domains'>Domains</FormattedLink>
      <FormattedLink href='/learn/fractal'>Fractal</FormattedLink>
      <FormattedLink href='/learn/map'>Map</FormattedLink>
      <FormattedLink href='/learn/month'>Month</FormattedLink>
      <FormattedLink href='/learn/queue'>Queue</FormattedLink>
      <FormattedLink href='/learn/timer'>Timer</FormattedLink>
    </div>
  );
}
