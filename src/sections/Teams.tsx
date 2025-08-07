import CeoImg from "../assets/ceo.avif"
import CtoImg from "../assets/cto.avif"
import CornerAngle from "../components/CornerAngle"
import WhiteCornerImg from "../assets/white-corner.svg"
function Teams() {
    return (
        <section className="px-5 md:px-40 mt-20 md:mt-40 font-roboto pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-5">
                <div>
                    <h1 className="text-[#FF8F3B]/80">our teams</h1>
                </div>
                <div>
                    <div className="relative">
                        <img src={CeoImg} alt="" />
                        <CornerAngle imgSrc={WhiteCornerImg} className="p-2" />
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-[30px] mt-10">
                            Dr. Jason Cornelius
                        </h1>
                        <p className="text-[19px]">
                            Co-founder & CEO
                        </p>

                        <p className="text-sm">
                            Led aerospace vehicle design for NASA's Titan Dragonfly mission and pioneered advanced machine learning-based design optimization methods for future Mars helicopters. Teaches aerospace engineering at Stanford University. Created an international annual drone competition.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <img src={CtoImg} alt="" />
                        <CornerAngle imgSrc={WhiteCornerImg} className="p-2" />
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-[30px] mt-10">
                            Steve Messinger
                        </h1>
                        <p className="text-[19px]">
                            Co-founder & CTO
                        </p>

                        <p className="text-sm">
                            Swarm robotics expert with a focus on guidance, navigation, and control of autonomous systems. Developed technologies for Boeing that enabled autonomous aircraft landings with one or more pilots incapacitated. Built multi-agent collaborative behaviors for unmanned systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams