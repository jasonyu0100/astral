export function UserProfileOverviewDate() {
  return (
    <div>
      <p className='text-lg font-bold text-slate-300'>
        {new Date().toDateString()}
      </p>
    </div>
  );
}
