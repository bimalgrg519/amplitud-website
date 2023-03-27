import { traits_type, traits_type2 } from "@/data/test"
import { liClickToggle, singleElementClickTrait, singleElementClickAttributeLeft } from "@/utils/tools"
import StepComponent from "../compos/StepComponent"
import ErrorMessage from "../compos/ErrorMessage"
import { useState, useEffect } from "react"


export default function ApplyCombination() {

    const [mustCombinWith, setMustCombineWith] = useState(false)
    const [cannotCombineWith, setCannotCombineWith] = useState(false)

    //state for attribute and traits on each side
    const [traitLeft, setTraitLeft] = useState("")
    const [attributeLeft, setAttributeLeft] = useState("")
    const [traitRight, setTraitRight] = useState("")
    const [attributeRight, setAttributeRight] = useState("")


    useEffect(() => {
        console.log(traitLeft)
      }, [traitLeft]);

    return(
        <div className=" relative w-full  flex flex-col justify-start items-start mt-10  ">

            <StepComponent stepNb={4} />
            <ErrorMessage />
            <h1 className=" mt-5 font-GilroyHeavy text-4xl">Apply combinations and exclusions on your collection</h1>
            <h3 className=" mt-5 text-colorText text-xl">Create a new rule</h3>

            <div className="relative min-h-[50vh] py-16 mb-10  w-full flex justify-around items-center large:hidden">

                <button className="p-2 w-28 text-sm text-whiteText bg-secondaryColor rounded-full absolute right-4 -bottom-5 2xl:right-24">Save</button>
                
                <div className=" h-[450px] rounded-xl border-2 border-inputColor flex ">
                    <div className="p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll">
                        {
                            traits_type.map((trait) => (
                                <button disabled={traitRight === trait.name ? true : false} key={trait.id} onClick={(e) => singleElementClickTrait(e, trait.name, setTraitLeft, traitLeft)}
                                className={` 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube
                                    transition-all duration-200 ease-in-out
                                    trait
                                    ${traitRight === trait.name ? "blur-[2px] cursor-default " : "blur-0 cursor-pointer hover:bg-secondaryColor hover:text-whiteText"}

                                `}>
                                    {trait.name}
                                </button>
                            ))
                        }
                    </div>
                    <div className="p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted">
                        {
                            traits_type2.map((trait) => (

                                <button disabled={attributeRight === trait.name ? true : false}  key={trait.id} onClick={(e) => singleElementClickAttributeLeft(e, trait.name, setAttributeLeft, attributeLeft)}
                                className={` 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube
                                    transition-all duration-200 ease-in-out
                                    trait
                                    ${attributeRight === trait.name ? "blur-[2px] cursor-default " : "blur-0 cursor-pointer hover:bg-secondaryColor hover:text-whiteText"}

                                `}>
                                    {trait.name}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="w-96   flex flex-col justify-center items-center">
                    <h2 className="text-sm text-colorText">Select Type Of Rule</h2>
                    <div className="w-full flex justify-around mt-2">
                        <button
                            disabled={cannotCombineWith} 
                            onClick={() => setMustCombineWith(!mustCombinWith)} 
                            className={`
                            p-5 text-sm rounded-xl text-colorText 
                            transition-all duration-200 ease-in-out
                            ${cannotCombineWith ? " blur-[2px]" : ""}
                            ${mustCombinWith ? "bg-clearGreenButton scale-110" : "bg-greenButton scale-100"}
                        
                        `}>Must Combine with</button>
                        <button
                        disabled={mustCombinWith} 
                        onClick={() => setCannotCombineWith(!cannotCombineWith)} 
                        className={`
                            p-5 text-sm rounded-xl text-colorText 
                            transition-all duration-200 ease-in-out
                            ${mustCombinWith ? " blur-[2px]" : ""}
                            ${cannotCombineWith ? "bg-clearYellowButton scale-110" : "bg-yellowButton scale-100"}
                        `}>Cannot Combine with</button>
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
                                <button  disabled={traitLeft === trait.name ? true : false} key={trait.id} onClick={(e) => singleElementClickTrait(e, trait.name, setTraitRight, traitRight)} className={` 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube 
                                    transition-all duration-200 ease-in-out
                                    
                                    trait
                                    ${traitLeft === trait.name ? "blur-[2px] cursor-default" : "blur-0 cursor-pointer hover:bg-secondaryColor hover:text-whiteText"}
                                `}>
                                    {trait.name}
                                </button>
                            ))
                        }
                    </div>
                    <div className="p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted">
                        {
                            traits_type2.map((trait) => (
                                <button disabled={attributeLeft === trait.name ? true : false} key={trait.id} onClick={(e) => singleElementClickAttributeLeft(e, trait.name, setAttributeRight , attributeRight)} className={` 
                                    flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube
                                    transition-all duration-200 ease-in-out
                                    trait
                                    ${attributeLeft === trait.name ? "blur-[2px] cursor-default " : "blur-0 cursor-pointer hover:bg-secondaryColor hover:text-whiteText"}

                                `}>
                                    {trait.name}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}