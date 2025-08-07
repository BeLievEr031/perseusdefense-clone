// src/components/Hero.jsx
import LogoImg from "../assets/logo.svg"
import HeroImg from "../assets/hero-img.avif"
import OrangeCorner from "../assets/orange-corner.svg"
import CornerAngle from "../components/CornerAngle";
import WhiteCorner from "../assets/white-corner.svg"
import Button from "../components/Button";
// import 
const Hero = () => {
    return (
        <section
            className="relative px-5 md:px-40 pt-5 pb-10 w-full bg-black text-white overflow-hidden desktop-bg"
        >
            {/* Top Right Join Button */}
            <div className="flex items-center justify-between pt-4 gap-4 md:gap-0">
                <div className="">
                    <img src={LogoImg} alt="Perseus Defense" className="h-6" />
                </div>

                <Button
                    corners={<CornerAngle imgSrc={OrangeCorner} className="inline" />}
                    className="px-5 md:px-10 py-3 text-sm md:text-md"
                />

            </div>

            {/* Main Text */}
            <div className="pt-30 md:pt-40 inset-0 flex flex-col items-start justify-center">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-mono max-w-2xl leading-tight">
                    Attritable 15" missiles<br />
                    designed for modern<br />
                    drone swarm warfare
                </h1>

                <p className="text-[#FFFFFF80] mt-10 text-xl font-roboto">
                    We’re building America’s Iron Dome for drones
                </p>

                {/* Email Signup */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-[#2a2a2a] text-white px-4 py-2 font-roboto focus:outline-none rounded-md w-full md:w-[380px]"
                    />
                    <Button className="px-5 py-3 text-sm rounded-md" />
                </div>
            </div>

            <div className="relative md:hidden mt-16">
                <img src={HeroImg} alt="" className="w-full" />
                <CornerAngle imgSrc={WhiteCorner} className="inline px-2 py-2" />
            </div>

            <div className="pt-12 md:pt-27 flex justify-between items-end">
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
            <CornerAngle imgSrc={WhiteCorner} className="px-2 py-2" />
        </section>
    );
};

export default Hero;
