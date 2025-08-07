import Button from "../components/Button"
import CornerAngle from "../components/CornerAngle"
import OrangeCorner from "../assets/orange-corner.svg"
import CordDateTime from "../components/CordDateTime"


function Progress() {
    return (
        <section className="px-5 md:px-40 mt-4 font-roboto">
            <h1 className="text-[#FF8F3B]/80">Our progress</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10">
                <div>
                    <h1 className="text-[#ffffff]/50">May 2025</h1>
                    <p className="text-[#ffffff] text-xl pt-3">+60 end-user interviews across joint forces</p>
                </div>
                <div>
                    <h1 className="text-[#ffffff]/50">June 2025</h1>
                    <p className="text-[#ffffff] text-xl pt-3">Built 2 spin-stabilized rockets, Mk-I/II guided missile
                    </p>
                </div>
                <div>
                    <h1 className="text-[#ffffff]/50">June 2025</h1>
                    <p className="text-[#ffffff] text-xl pt-3">Won Y Combinator’s S25 batch preview day
                    </p>
                </div>

                <div>
                    <h1 className="text-[#ffffff]/50">July 2025</h1>
                    <p className="text-[#ffffff] text-xl pt-3">Testing of Mk-III surface to air intercepto</p>
                </div>

            </div>
            <div className="flex justify-center items-center pt-15">
                <Button
                    corners={<CornerAngle imgSrc={OrangeCorner} className="inline" />}
                    className="px-5 md:px-10 py-3 text-sm md:text-md"
                />
            </div>
            <CordDateTime className="pt-15 md:pt-10" />
        </section>
    )
}

export default Progress