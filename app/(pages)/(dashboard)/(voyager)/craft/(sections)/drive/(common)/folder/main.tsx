interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export default function CraftDriveFolder({ ...props }: InputProps) {
  return (
    <div className="w-48 h-56 flex-col justify-center items-start gap-3 inline-flex">
      <button {...props}>
        <div className="w-48 h-32 justify-start items-start inline-flex">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </button>
      <div className="w-48 h-20 flex-col justify-start items-start inline-flex">
        <div className="text-white text-xl font-bold font-['Creato Display'] leading-7">
          Architecture
        </div>
        <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
          54 elements
        </div>
        <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
          3443 views, 123 downloads
        </div>
      </div>
    </div>
  );
}
