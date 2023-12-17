export interface NavbarLogoLinkProps extends React.ComponentPropsWithoutRef<"a"> {
}

export function TopbarLogo({ ...props }: NavbarLogoLinkProps) {
  return (
    <a className="flex items-center pr-[5rem]" {...props}>
      <img src="/brand/logo.png" className="w-[12rem]" alt="Ouros" />
    </a>
  );
}
