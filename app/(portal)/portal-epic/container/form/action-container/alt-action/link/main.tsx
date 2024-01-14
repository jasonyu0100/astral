interface AltActionLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function PortalFormAltActionLink({ children, ...props }: AltActionLinkProps) {
  return (
    <a className="text-blue-500 font-extraBold" {...props}>
      {children}
    </a>
  );
}
