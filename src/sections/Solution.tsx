
import LaunchingImg from "../assets/military.avif"
import DroneImg from "../assets/drone.avif"
import SemiCircleImg from "../assets/semicircle.avif"
import CrossImg from "../assets/cross.svg"
import BulletImg from "../assets/bullet.avif"
import MobBulletImg from "../assets/mobi-bulet.png"

function Solution() {
    return (
        <section className="px-5 md:px-40 w-full bg-black text-white py-16 font-roboto">
            <p className="text-[#FF8F3B]/80">
                Solution
            </p>
            <p className="text-[#ffffff]/50 pt-10 pb-15 w-full md:w-1/2 text-xl">
                We are building the best in class affordable and guided micro-missile pods for countering drones.
            </p>
            <div className="md:grid md:grid-cols-[2fr_1fr] gap-4 overflow-hidden space-y-2 md:space-y-0">
                <div className="md:grid md:grid-rows-[2fr_1fr] gap-2">
                    <div className="bg-[#0a0a0a] overflow-hidden relative text-[#ffffff]/80">
                        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-[210px]">
                            <h1 className="text-[20px] md:text-[30px] font-bold">
                                Different launching mechanisms
                            </h1>
                            <p className="pr-2 text-[14px] md:text-[16px]">
                                UAVs, ground vehicles, boats and more
                            </p>
                        </div>
                        <img src={LaunchingImg} alt="" className="w-[80%] translate-x-[30%] translate-y-10" />
                    </div>
                    <div className="md:grid md:grid-cols-2 gap-3 pt-3 space-y-2 md:space-y-0">
                        <div className="bg-[#0a0a0a] overflow-hidden relative text-[#ffffff]/80">
                            <img src={DroneImg} alt="" className="h-[240px] md:inline w-full object-cover scale-150" />
                            <div className="absolute top-5 left-5 md:top-10 md:left-10 w-[210px]">
                                <h1 className="ttext-[20px] md:text-[30px] font-bold">
                                    Targets Group 1/2 Drones
                                </h1>
                                <p className="pr-2">
                                    Disables light, fast, and low-flying UAS
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#0a0a0a] overflow-hidden relative text-[#ffffff]/80">
                            <img src={SemiCircleImg} alt="" className="h-[240px] md:inline w-full object-cover scale-150" />
                            <div className="absolute top-5 left-5 md:top-10 md:left-10 w-[210px]">
                                <h1 className="ttext-[20px] md:text-[30px] font-bold">
                                    400+
                                </h1>
                                <p className="pr-2">
                                    meter range
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-rows-[1fr_2fr] gap-2 space-y-2 md:space-y-0">
                    <div className="bg-[#0a0a0a] overflow-hidden relative text-[#ffffff]/80">
                        <img src={CrossImg} alt="" className="h-[240px] md:inline w-full object-cover scale-150" />
                        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-[210px]">
                            <h1 className="ttext-[20px] md:text-[30px] font-bold">
                                10x cheaper
                            </h1>
                            <p className="pr-2">
                                than the current solutions. Less than $10,000 per missile
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#0a0a0a] overflow-hidden relative text-[#ffffff]/80">
                        <img src={BulletImg} alt="" className="hidden md:inline w-full object-cover scale-150" />
                        <img src={MobBulletImg} alt="" className="md:hidden h-[240px] object-cover w-full" />
                        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-[210px]">
                            <h1 className="ttext-[20px] md:text-[30px] font-bold">
                                15
                            </h1>
                            <p className="pr-2">
                                micro-missiles per pod
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Solution