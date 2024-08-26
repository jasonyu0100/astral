import { LinkInputProps } from '@/types/props/main';

interface FormattedLinkProps extends LinkInputProps {
  children?: React.ReactNode;
}

export function FormattedLink({ children, ...props }: FormattedLinkProps) {
  return (
    <a
      href={props.href.toString()}
      className='text-lg font-bold text-slate-500'
    >
      {children}
    </a>
  );
}
