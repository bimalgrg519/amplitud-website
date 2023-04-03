
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"

export default function Landing() {
    return (
        <div className="w-screen flex flex-col justify-start items-center">
            <FirstSection />
            <SecondSection />
        </div>
    )
}