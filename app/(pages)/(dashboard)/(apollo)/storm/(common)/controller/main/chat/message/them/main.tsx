export default function StormPartnerChatMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-3 max-w-[350px] mr-auto text-white font-regular">
      {children}
    </p>
  );
}
