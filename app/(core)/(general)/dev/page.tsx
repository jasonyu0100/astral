import { FormattedLink } from '@/(components)/(basic)/link/main';
import { devMap } from './map';

export default function Page() {
  return (
    <div className='flex flex-col p-[2rem] space-y-[1rem]'>
      <h1 className='text-2xl font-bold text-white'>DEVELOP</h1>
      <FormattedLink href={devMap.dev.texture.link}>Texture</FormattedLink>
      <FormattedLink href={devMap.dev.fonts.link}>Fonts</FormattedLink>
      <FormattedLink href={devMap.dev.model.link}>Model</FormattedLink>
      <FormattedLink href={devMap.dev.db.link}>DB</FormattedLink>
    </div>
  );
}
