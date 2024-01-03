export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function DriveBreadcrumbItem({children, ...props} : InputProps) {
    return <a className="text-slate-400 text-xl font-extraBold font-['Creato Display'] leading-7" {...props}>
      {children}
    </a>
}