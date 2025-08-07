import clsx from "clsx"
import type { ReactNode } from "react"

interface IProp {
    className?: string;
    corners?: ReactNode
}
function Button({ corners, className = "" }: IProp) {
    return (
        <div className="relative">
            <button className={clsx(
                "group bg-[#FF8F3B]/15 font-roboto font-bold text-[#FF8F3B] tracking-wide hover:bg-[#FF8F3B]/25 transition",
                className // ✅ px-0 now overrides earlier styles
            )}
            >
                JOIN NEWSLETTER
                {corners}
            </button>
        </div>
    )
}

export default Button