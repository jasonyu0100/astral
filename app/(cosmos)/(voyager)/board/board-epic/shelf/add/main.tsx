'use client';

export function RecordCollectionAdd() {
  return (
    <div className='flex h-[250px] w-[200px] flex-col items-center justify-center'>
      <a
        className='flex flex-col items-center space-y-[1rem]'
        href='/collection/now'
      >
        <div className='flex h-[150px] w-[150px] items-center justify-center bg-white'>
          <div className='h-[125px] w-[125px] bg-black'>
            <img className='w-full' src='/voyager/record/personal.png' />
          </div>
        </div>
        <p className='font-creato-bold text-xl font-bold text-slate-50'>
          Personal
        </p>
      </a>
    </div>
  );
}
