import { LinkInputProps } from '@/(common)/types/main';

interface AltActionLinkProps extends LinkInputProps {
  children: React.ReactNode;
}

export function PortalFormAltActionLink({
  children,
  ...props
}: AltActionLinkProps) {
  return (
    <a className='font-extraBold text-blue-500' {...props}>
      {children}
    </a>
  );
}
