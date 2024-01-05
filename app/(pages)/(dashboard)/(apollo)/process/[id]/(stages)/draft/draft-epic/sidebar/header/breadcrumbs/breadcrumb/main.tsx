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
        <div className="text-slate-400 font-bold">{children}</div>
      ) : (
        <div className="text-slate-500 font-bold">{children}</div>
      )}
    </button>
  );
}
