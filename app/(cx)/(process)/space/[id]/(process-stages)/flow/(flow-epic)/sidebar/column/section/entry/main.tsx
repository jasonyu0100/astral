import { MomentContext } from "@/(logic)/internal/data/infra/model/flow/moment/main";
import { useContext } from "react";

export function FlowSidebarEntry() {
  const moment = useContext(MomentContext);
  return (
    <div className='flex flex-row items-center space-x-[1rem]'>
      <div className='h-[50px] w-[50px] flex-shrink-0'>
        <img
          className='h-full w-full rounded-full'
          alt='test'
          src={moment?.file?.src}
        />
      </div>
      <p className='text-lg font-bold text-white'>{moment.title}</p>
    </div>
  );
}
