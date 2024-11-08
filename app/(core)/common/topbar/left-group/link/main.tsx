import { HyperLinkInputProps } from '@/props/main';

interface InputProps extends HyperLinkInputProps {
  children?: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <a className='text-md font-bold uppercase text-slate-500' {...props}>
      {children}
    </a>
  );
}
