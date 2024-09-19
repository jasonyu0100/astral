export function ImageBackground({ active }: { active?: boolean }) {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 h-full w-full'>
        {active && (
          <img
            src='https://images.unsplash.com/photo-1472313420546-a46e561861d8?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover'
          />
        )}
        <div className='absolute inset-0 bg-slate-700 opacity-30'></div>
      </div>
    </div>
  );
}
