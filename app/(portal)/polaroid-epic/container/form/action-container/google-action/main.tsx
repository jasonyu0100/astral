import { ButtonInputProps } from "@/(common)/types/main";

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
}

export function PortalFormGoogleAction({ children, ...props }: InputProps) {
  return (
    <button
      className="w-full h-[60px] flex-shrink-0 border-blue-700 border-[3px] flex flex-col justify-center items-center mb-[1rem]"
      {...props}
    >
      <div className="text-center text-blue-700 text-xl font-bold leading-9">
        {children}
      </div>
    </button>
  );
}
