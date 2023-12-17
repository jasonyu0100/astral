export default function StormPartnerChatMessage({
  children,
}: {
  children: React.ReactNode;
}) {
    return <p className="bg-gradient-to-br from-blue-600 to-cyan-400 rounded-[2rem] p-3 max-w-[300px] ml-auto text-white font-regular">{children}</p>
}
