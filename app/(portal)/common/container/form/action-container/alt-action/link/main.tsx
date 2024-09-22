import { LinkInputProps } from '@/props/main';
import Link from 'next/link';

interface AltActionLinkProps extends LinkInputProps {
  children?: React.ReactNode;
}

export function PortalFormAltActionLink({
  children,
  ...props
}: AltActionLinkProps) {
  return (
    <Link className='font-extraBold text-blue-500' {...props}>
      {children}
    </Link>
  );
}
