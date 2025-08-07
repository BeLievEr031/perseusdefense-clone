import clsx from "clsx"
interface Iprop {
    className?: string;
}
function CordDateTime({ className }: Iprop) {
    return (
        <div className={clsx("flex justify-between items-end", className)}>
            <div className="text-gray-400 font-roboto">
                <p className="text-[14px] md:text-[19px] text-white/50 font-[600]">N49°50’30.5484”</p>
                <p className="text-[14px] md:text-[19px] text-white/50 font-[600] blur-[2px]">W106°32’10.325”</p>
            </div>

            <div className="text-gray-400 text-right pr-6 font-roboto rounded-md">
                <p className="text-[14px] md:text-[19px] text-white/50 font-[600]">2025-03-30</p>
                <p className="text-[14px] md:text-[19px] text-white/50 font-[600] blur-[2px]">20:22:43</p>
                <p className="text-[14px] md:text-[19px] text-white/50 font-[600] blur-[3px]">UTC-?.?</p>
            </div>
        </div>
    )
}

export default CordDateTime