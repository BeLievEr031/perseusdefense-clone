import Button from "../components/Button"
import CordDateTime from "../components/CordDateTime"
import CurveCounterImg from "../assets/curve-counter.avif"
import LogoImg from "../assets/logo.svg"

function Footer() {
    return (
        <section className="px-5 md:px-40 font-roboto mt-15">
            <h1 className="text-white text-center text-[30px]">Stay Updated</h1>
            <p className="text-white/50 text-center w-full md:w-[65%] mx-auto pt-5">Get the latest updates on Perseus Defense's innovative solutions and breakthroughs in counter-drone technology</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#2a2a2a] text-white px-4 py-2 font-roboto focus:outline-none rounded-md w-full md:w-[380px]"
                />
                <Button className="px-5 py-3 text-sm rounded-md w-full md:w-auto" />
            </div>

            <CordDateTime className="mt-10 md:mt-0" />
            <div className="flex justify-center md:-translate-y-10">
                <img src={CurveCounterImg} className="w-full md:w-1/2" />
            </div>
            <div className="pb-10 md:flex md:items-center justify-center md:justify-between pt-4 gap-4 md:gap-0">
                <div className="flex justify-center md:block">
                    <img src={LogoImg} alt="Perseus Defense" className="h-6" />
                </div>
                <p className="text-white text-center md:text-left pt-4 md:pt-0">Contact us:jason@perseusdefense.tech</p>
            </div>
        </section>
    )
}

export default Footer