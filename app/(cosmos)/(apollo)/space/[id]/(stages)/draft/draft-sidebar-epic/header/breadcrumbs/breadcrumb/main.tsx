interface BreadcrumbsLink extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  active: boolean;
}

export function BreadcrumbsLink({
  children,
  active,
  ...props
}: BreadcrumbsLink) {
  return (
    <button {...props}>
      {active ? (
        <p className="text-slate-400 font-bold">{children}</p>
      ) : (
        <p className="text-slate-500 font-bold">{children}</p>
      )}
    </button>
  );
}
