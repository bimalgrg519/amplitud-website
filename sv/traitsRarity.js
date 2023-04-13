
import CreatorNav from '@/components/Creator/compos/CreatorNav'
import Artwork from '@/components/Creator/step3/Artwork'
import ErrorMessage from '@/components/Creator/compos/ErrorMessage'



export default function traitsRarity() {
    return (
        <div className="relative lg:px-20 flex items-center justify-center flex-col w-screen ">
            
            <div className='w-80 h-44 z-40 rounded-xl flex justify-center items-center bg-slate-900 opacity-100 absolute top-[20%] right-2/6 lg:hidden' >
                <h1>Please connect via desktop <span className=' ml-4'>🖥</span> </h1>
            </div>
           
            <div className='w-screen large:blur-[10px] relative px-28'>
                <div className='lg:hidden w-full h-full z-50 bg-transparent absolute top-0 left-0' />
                <CreatorNav />
                <Artwork />
            </div>



        </div>
    )
}