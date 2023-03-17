import { traits_type, traits_type2 } from "@/data/test"
import { liClickToggle } from "@/utils/tools"
import StepComponent from "../compos/StepComponent"



export default function ApplyCombination() {

    return(
        <div className="w-full pt-10 flex flex-col justify-start items-start ">


            <StepComponent stepNb={4} />
            <h1 className=" mt-5 font-GilroyHeavy text-4xl">Apply combinations and exclusions on your collection</h1>
            <h3 className=" mt-5 text-colorText text-xl">Create a new rule</h3>

            <div className=" min-h-[50vh] py-16  w-full flex justify-around items-center">
                <div className=" h-[450px] rounded-xl border-2 border-inputColor flex ">
                    <div className="p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll">
                        {
                            traits_type.map((trait) => (
                                <div 
                                onClick={liClickToggle}
                                key={trait.id}
                                
                                className=" 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
                                    transition-all duration-200 ease-in-out
                                    hover:bg-secondaryColor hover:text-whiteText
                                ">
                                    <h3>{trait.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted">
                        {
                            traits_type2.map((trait) => (
                                <div 
                                onClick={liClickToggle}
                                key={trait.id}
                                className=" 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
                                    transition-all duration-200 ease-in-out
                                    hover:bg-secondaryColor hover:text-whiteText
                                ">
                                    <h3>{trait.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-96   flex flex-col justify-center items-center">
                    <h2 className="text-sm text-colorText">Select Type Of Rule</h2>
                    <div className="w-full flex justify-around mt-2">
                        <button className="p-5 bg-greenButton text-sm rounded-xl text-colorText ">Must Combine with</button>
                        <button className="p-5 bg-yellowButton text-sm rounded-xl text-colorText ">Must Combine with</button>
                    </div>

                    <div className=" w-full flex flex-col justify-center items-center text-sm mt-10">
                        <h3 className="text-colorText mb-4">Preview</h3>
                        <div className="flex justify-between items-center w-full p-2 border-inputColor border-2 rounded-xl">
                            <div className=" h-28 w-28 rounded-xl bg-lightGrayCube" />
                            <div className=" h-28 w-28 rounded-xl bg-lightGrayCube" />
                            <div className=" h-28 w-28 rounded-xl bg-lightGrayCube" />
                        </div>
                    </div>
                </div>

                <div className=" h-[450px] rounded-xl border-2 border-inputColor flex ">
                    <div className="p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll">
                        {
                            traits_type.map((trait) => (
                                <div 
                                onClick={liClickToggle}
                                key={trait.id}

                                className=" 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
                                    transition-all duration-200 ease-in-out
                                    hover:bg-secondaryColor hover:text-whiteText
                                ">
                                    <h3>{trait.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted">
                        {
                            traits_type2.map((trait) => (
                                <div 
                                onClick={liClickToggle}
                                key={trait.id}

                                className=" 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
                                    transition-all duration-200 ease-in-out
                                    hover:bg-secondaryColor hover:text-whiteText
                                ">
                                    <h3>{trait.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}