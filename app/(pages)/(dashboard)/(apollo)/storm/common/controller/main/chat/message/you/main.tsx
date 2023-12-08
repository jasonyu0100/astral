export default function StormYouChatMessage({ children } : { children: React.ReactNode}) {
    return <p className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[20px] p-3 max-w-[300px] mr-auto text-white font-regular">{children}</p>
}