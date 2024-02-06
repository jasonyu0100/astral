import { LinkInputProps } from '@/(common)/types/main';

export function TopbarLogo({ ...props }: LinkInputProps) {
  return (
    <a
      className='flex h-full w-[15rem] flex-shrink-0 flex-row items-center px-[1rem]'
      {...props}
    >
      <img src='/brand/logo.png' className='w-[12rem]' alt='Ouros' />
    </a>
  );
}
