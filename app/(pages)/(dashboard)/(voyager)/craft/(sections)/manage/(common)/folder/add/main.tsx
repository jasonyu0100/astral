import ManageAddIcon from "../../icons/add/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export default function CraftManageFolderAdd({ ...props }: InputProps) {
  return (
    <div className="w-48 h-56 flex-col justify-center items-start gap-3 inline-flex">
      <button {...props}>
        <div className="w-48 h-32 inline-flex bg-slate-50 items-center justify-center">
          <ManageAddIcon />
        </div>
      </button>
      <div className="w-48 h-20 flex-col justify-start items-start inline-flex">
        {/* <div className="text-white text-xl font-bold font-['Creato Display'] leading-7">
          New Folder
        </div> */}
        {/* <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
          54 elements
        </div>
        <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
          3443 views, 123 downloads
        </div> */}
      </div>
    </div>
  );
}
