
import ApplyCombination from "@/components/Creator/step4/ApplyCombination"
import CreatorNav from "@/components/Creator/compos/CreatorNav"
import SavedRules from "@/components/Creator/step4/SavedRules"


export default (() => {

  return (
    <div className="lg:px-20 flex items-center justify-center flex-col relative w-screen">
            <div className='w-80 h-44 z-40 rounded-xl flex justify-center items-center bg-slate-900 opacity-100 absolute top-[20%] right-2/6 lg:hidden' >
                <h1>Please connect via desktop <span className=' ml-4'>🖥</span> </h1>
            </div>
            <div className='w-full large:blur-[10px] relative'>
                <div className='w-full h-full z-30 bg-transparent absolute top-0 left-0 lg:hidden' />
                <CreatorNav />
                <ApplyCombination />
                <SavedRules />
            </div>
        </div>
  )

});