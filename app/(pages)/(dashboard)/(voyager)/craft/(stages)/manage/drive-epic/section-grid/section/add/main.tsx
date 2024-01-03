import { DriveAddIcon } from "../../../icons/add/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export function DriveSectionAdd({ ...props }: InputProps) {
  return (
    <div className="w-48 h-56 flex-col justify-center items-start gap-3 inline-flex">
      <button {...props}>
        <div className="w-48 h-32 inline-flex bg-slate-50 items-center justify-center">
          <DriveAddIcon />
        </div>
      </button>
      <div className="w-48 h-20 flex-col justify-start items-start inline-flex">
      </div>
    </div>
  );
}
