
import ApplyCombination from "@/components/Creator/step4/ApplyCombination"
import CreatorNav from "@/components/Creator/compos/CreatorNav"
import SavedRules from "@/components/Creator/step4/SavedRules"




export default function Step4() {

    return (
        <div className=" px-20 flex items-center justify-center flex-col ">
            <CreatorNav />
            <ApplyCombination />
            <SavedRules />
        </div>
    )

}