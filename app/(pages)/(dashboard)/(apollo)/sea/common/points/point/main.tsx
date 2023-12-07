export default function SeaPoint({ children }: { children: React.ReactNode }) {
  return  <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0">
    {children}
  </div>
}