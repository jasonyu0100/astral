export default function YourChatMessage({ children } : { children: React.ReactNode}) {
    return <p className="bg-slate-800 rounded-md p-3 max-w-[300px] mr-auto text-white font-regular">{children}</p>
}