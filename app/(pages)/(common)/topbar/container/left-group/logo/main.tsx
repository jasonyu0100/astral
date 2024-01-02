export interface NavbarLogoLinkProps extends React.ComponentPropsWithoutRef<"a"> {
}

export function TopbarLogo({ ...props }: NavbarLogoLinkProps) {
  return (
    <a className="flex flex-col items-center justify-center flex-shrink-0 w-[16rem] h-full" {...props}>
      <img src="/brand/logo.png" className="w-[12rem]" alt="Ouros" />
    </a>
  );
}
