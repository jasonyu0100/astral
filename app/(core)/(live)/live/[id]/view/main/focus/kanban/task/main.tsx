export function PublicSpaceKanbanTask({ task }) {
  return (
    <div
      className={`h-full w-[300px] flex-shrink-0 rounded bg-yellow-500 p-4 shadow-sm`}
    >
      <div className='flex items-start justify-between space-x-[1rem]'>
        <p className='text-lg font-bold text-black'>
          {task.title || 'Click to add title...'} {/* Placeholder text */}
        </p>
      </div>
      <p className='text-sm text-black'>
        {task.description || 'Click to add description...'}{' '}
      </p>
    </div>
  );
}
