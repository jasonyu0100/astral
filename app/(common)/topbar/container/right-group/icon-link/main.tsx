import { LinkInputProps } from '@/(common)/types/main';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function TopbarIconLink({ children, ...props }: InputProps) {
  return (
    <a
      className='inline-flex items-center rounded-full p-2 text-center text-sm font-medium text-gray-600 hover:text-white'
      {...props}
    >
      {children}
    </a>
  );
}
