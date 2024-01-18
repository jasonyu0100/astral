import { LinkInputProps } from '@/(common)/types/main';

interface AltActionLinkProps extends LinkInputProps {
  children: React.ReactNode;
}

export function PortalFormAltActionLink({
  children,
  ...props
}: AltActionLinkProps) {
  return (
    <a className='text-blue-500 font-extraBold' {...props}>
      {children}
    </a>
  );
}
