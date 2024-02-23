export function GalleryBackChange() {
  return (
    <button
      className='mt-auto flex w-full items-center justify-center bg-black p-[1rem] font-bold text-white'
      onClick={(e) => {
        e.stopPropagation();
        alert('adsdas');
      }}
    >
      Change
    </button>
  );
}
