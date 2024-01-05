export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  active: boolean;
}

export function DriveBreadcrumbItem({children, active, ...props} : InputProps) {
    return <>
      {active ?
        <a className="text-slate-400 font-bold" {...props}>
          {children}
        </a>
        :
        <a className="text-slate-500 font-bold" {...props}>
          {children}
        </a>
    }
    </>
    
}