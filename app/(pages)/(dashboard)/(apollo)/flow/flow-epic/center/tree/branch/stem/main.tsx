import { FlowPoint, FlowPointSnapshot } from "@/(pages)/(dashboard)/(apollo)/flow/data";

export default function FlowTreeStem({ branch }: { branch: FlowPoint }) {
  return (
    <div className="relative flex-shrink-0 w-[70px] h-[150px]">
      <p className="absolute text-white left-[-45px] bottom-[65px] -rotate-90 font-bold text-sm w-[150px] text-center">
        {branch.date.toLocaleDateString()}
      </p>
      <div className="relative top-0 left-[70px] w-[1px] h-[150px] bg-slate-500" />
      <div className="relative bottom-[10px] left-[60px] w-[20px] h-[20px] rounded-full bg-slate-500" />
    </div>
  );
}
