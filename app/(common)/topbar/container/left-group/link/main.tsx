import { LinkInputProps } from "@/(common)/types/main";

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <a
      className="text-white"
      aria-current="page"
      {...props}
    >
      {children}
    </a>
  );
}
