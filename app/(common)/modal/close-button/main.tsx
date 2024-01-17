import { ButtonInputProps } from "@/(common)/types/main";

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
}

export function ModalCloseButton({ children, ...props }: InputProps) {
  return (
    <button {...props}>
      <div className="mt-[3rem] animate-pulse text-center text-slate-500 text-xl font-bold leading-7">
        {children}
      </div>
    </button>
  );
}
