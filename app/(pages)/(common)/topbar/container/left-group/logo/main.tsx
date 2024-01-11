export interface NavbarLogoLinkProps extends React.ComponentPropsWithoutRef<"a"> {
}

export function TopbarLogo({ ...props }: NavbarLogoLinkProps) {
  return (
    <a className="flex flex-row items-center flex-shrink-0 w-[15rem] h-full px-[1rem]" {...props}>
      <img src="/brand/logo.png" className="w-[12rem]" alt="Ouros" />
    </a>
  );
}
