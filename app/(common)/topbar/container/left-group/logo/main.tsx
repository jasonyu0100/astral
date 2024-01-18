import { LinkInputProps } from '@/(common)/types/main';

export function TopbarLogo({ ...props }: LinkInputProps) {
  return (
    <a
      className='flex flex-row items-center flex-shrink-0 w-[15rem] h-full px-[1rem]'
      {...props}
    >
      <img src='/brand/logo.png' className='w-[12rem]' alt='Ouros' />
    </a>
  );
}
