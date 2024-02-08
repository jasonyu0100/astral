import { ImageInputProps } from '@/(common)/types/main';

export function ResourceImage({ ...props }: ImageInputProps) {
  return (
    <img
      {...props}
      className='h-[150px] w-[150px] cursor-pointer rounded-full'
    />
  );
}
