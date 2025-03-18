export default function FormWrapper({
    title, subtitle, children
}: {
    title: string,
    subtitle?: string;
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">{title}</h1>
                <span className="font-semibold text-base text-yellow-600">{subtitle}</span>
            </div>
            <div>{children}</div>
        </div>
    )
}