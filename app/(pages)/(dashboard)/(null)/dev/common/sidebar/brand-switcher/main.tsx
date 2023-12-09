export default function BrandSwitcher({children} : {children: React.ReactNode}) {
    return <div className="w-full">
        <a
          href="/collection"
          className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
        >
            {children}
        </a>
      </div>
}