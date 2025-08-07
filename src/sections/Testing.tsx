import Test1Img from "../assets/test1.avif"
import Test2Img from "../assets/test2.avif"
import Test3Img from "../assets/test3.avif"
import Test4Img from "../assets/test4.avif"
import Test5Img from "../assets/test5.avif"
import PlayImg from "../assets/play.svg"
import BalckCornerImg from "../assets/black-corner.svg"
import CornerAngle from "../components/CornerAngle"
function Testing() {
    return (
        <section className="px-5 md:px-40 mt-30 font-roboto">
            <h1 className="text-[#FF8F3B]/80">Footage from testing</h1>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-2 mt-15">
                <div className="relative">
                    <img src={Test1Img} alt="" />
                    <img src={PlayImg} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-10" />
                    <CornerAngle imgSrc={BalckCornerImg} className="p-2" />
                </div>
                <div className="relative">
                    <img src={Test2Img} alt="" />
                    <CornerAngle imgSrc={BalckCornerImg} className="p-2" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-1.5">
                <div className="relative">
                    <img src={Test3Img} alt="" />
                    <CornerAngle imgSrc={BalckCornerImg} className="p-2" />
                </div>
                <div className="relative">
                    <img src={Test4Img} alt="" />
                    <CornerAngle imgSrc={BalckCornerImg} className="p-2" />
                </div>
                <div className="relative">
                    <img src={Test5Img} alt="" className="w-full" />
                    <CornerAngle imgSrc={BalckCornerImg} className="p-2" />
                </div>
            </div>
        </section>
    )
}

export default Testing