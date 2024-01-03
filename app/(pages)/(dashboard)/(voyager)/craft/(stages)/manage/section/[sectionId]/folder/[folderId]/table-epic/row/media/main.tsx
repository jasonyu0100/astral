export function TableRowMedia({ src }: { src: string }) {
  return (
    <div className="basis-1/3 flex justify-center items-center p-[2rem]">
      <img className="w-[200px] h-[200px]" alt="Mountains" src={src} />
    </div>
  );
}
