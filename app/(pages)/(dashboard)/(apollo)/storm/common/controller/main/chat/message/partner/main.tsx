export default function PartnerChatMessage({
  children,
}: {
  children: React.ReactNode;
}) {
    return <p className="bg-gradient-to-br from-blue-600 to-cyan-400 rounded-[20px] p-3 max-w-[300px] ml-auto text-white font-regular">{children}</p>
}
