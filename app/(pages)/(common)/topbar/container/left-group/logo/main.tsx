export interface NavbarLogoLinkProps extends React.ComponentPropsWithoutRef<"a"> {
}

export function TopbarLogo({ ...props }: NavbarLogoLinkProps) {
  return (
    <a className="flex items-center  pr-[3rem]" {...props}>
      <img src="/brand/logo.png" className="h-[3rem]" alt="Ouros" />
    </a>
  );
}
