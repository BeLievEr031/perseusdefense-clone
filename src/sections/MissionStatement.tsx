import HeightCounterImg from "../assets/height-counter.avif"
import CrashedPlaneImg from "../assets/crashed-plane.png"



export default function MissionStatement() {
    return (
        <section className="px-5 md:px-40 pt-20 w-full pb-15">
            <div className="flex md:gap-20 md:justify-between items-center">
                <img src={HeightCounterImg} alt="" className="hidden xl:inline" />
                <p className="text-[#ffffff]/80 font-roboto text-[19px] xl:px-9">
                    We build counter-UAS capabilities for the Department of Defense and Homeland Security. Our mission is to enable mass production of micro-guided missiles — <span className="text-[#FF8F2B]">affordable, scalable</span>, and ready for the field. Our portable missile battery is designed for combined arm use, offering both <span className="text-[#FF8F2B]">mounted, dismounted, and low-collateral</span> variants.
                </p>
                <img src={HeightCounterImg} alt="" className="hidden xl:inline" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-28 font-roboto text-white/75 gap-10">
                <div className="text-[19px]">

                    <p className="text-[#FF8F2B]/50">A new challenge</p>
                    <p className="pt-15">Drones are reshaping the modern battlefield — fast, cheap, and highly effective.</p>
                    <p className="pt-8">Traditional systems struggle to keep up.</p>

                    <div className="grid grid-cols-2 pt-15 gap-5">
                        <div>
                            <p className="text-[30px]">70-80%</p>
                            <p className="text-[14px]">of battlefield fatalities come from drone strikes</p>
                        </div>
                        <div>
                            <p className="text-[30px]">$100,000+</p>
                            <p className="text-[14px]">kinetic solutions are used to counteract $500 drones</p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={CrashedPlaneImg} alt="" />
                    <p className="text-sm">$500 Ukrainian drones decimate $100M Russian strategic bombers</p>
                </div>
            </div>
        </section>
    )
}

