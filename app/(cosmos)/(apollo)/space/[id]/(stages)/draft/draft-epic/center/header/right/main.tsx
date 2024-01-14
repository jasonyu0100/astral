export function DraftHeaderRight({ children }: { children: React.ReactNode}) {
    return <div
        className="flex flex-row justify-end w-1/3">
            {children}
        </div>
}