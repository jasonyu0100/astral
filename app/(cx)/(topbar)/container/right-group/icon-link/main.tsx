import { ButtonInputProps, LinkInputProps } from '@/(logic)/types/element/main';
import Link from 'next/link';

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
}

export function TopbarIconLink({ children, ...props }: InputProps) {
  return (
    <button
      className='inline-flex items-center rounded-full p-2 text-center text-sm font-medium text-gray-600 hover:text-white'
      {...props}
    >
      {children}
    </button>
  );
}
