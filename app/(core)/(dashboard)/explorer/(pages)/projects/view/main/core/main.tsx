import { HorizonsClusterLedger } from './(pages)/clusters/main';
import { HorizonsGroupLedger } from './(pages)/groups/main';
import { HorizonsLocalLedger } from './(pages)/locals/main';

export function HorizonsCore() {
  return (
    <div className='h-full w-full overflow-auto'>
      <div className={`flex w-full flex-col`}>
        <HorizonsClusterLedger />
        <HorizonsGroupLedger />
        <HorizonsLocalLedger />
      </div>
    </div>
  );
}
