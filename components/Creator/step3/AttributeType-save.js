
import avatar from "@/src/img/avatar.png";
import Image from "next/image";
import {motion as m} from "framer-motion"
import { useState, useEffect } from "react";
import { removeActiveClass } from "@/utils/tools";
import { getPercentsAttribute, handleInputChange, singleElementClickAttribute} from "@/utils/tools";

export default function AttributeType({name, traitName, onButtonClick, attribute}) {

    const attributeName = name.replace(" ", "_");
    const [placeholderValue, setPlaceholderValue] = useState("Enter %");
    const [inputValue, setInputValue] = useState("");

    //const for check if isOnly button is clicked
    const [isOnly, setIsOnly] = useState(false);

    //value of the percentage input already convert in int without "%" to use maybe for Api
    const [inputValueInt, setInputValueInt] = useState(0);

    //sutff to detect if user setup trait type
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = (boolean) => {
        const newClickedStatus = boolean;
        setIsClicked(newClickedStatus);
        onButtonClick(attribute.id, newClickedStatus);
      };

      useEffect(() => {
        if(inputValueInt > 0 || isOnly){
            handleClick(true);
        }else{
            handleClick(false);
        }   
      },[inputValueInt, isOnly]);



      useEffect(() => {

        if(inputValue.length === 1 && inputValue === "%" ){
            setInputValue("");
        }

      },[inputValue]);

    //function to check add/delete active class on edge and calculate percent to add it to input

    return(
        <m.div layout className="flex w-full py-3 justify-between items-center">
            {/* <Image src={avatar} alt="attribute_image" width={"w-1/12"} height={70} /> */}
            <m.div className="w-20 h-20 bg-lightPurple rounded-xl" />
            <m.h2 className="font-bold w-3/12 text-center">{name}</m.h2>
            <m.div className="relative w-4/12 flex justify-center items-center">

                <m.div id={`Attributes_${traitName}_${attributeName}`} className={` relative flex items-center h-10 py-2 px-2 rounded-xl border-2 border-lightGray overflow-hidden ${isOnly ? " blur-[2px] " : ""}`}>
                    <m.div className={`w-full h-full opacity-0 absolute top-0 left-0 ${isOnly ? "z-10" : "-z-10"}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="1" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="2" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="3" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="4" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="5" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="6" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="7" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="8" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="9" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                    <m.div onClick={(e) => getPercentsAttribute(e, setInputValue, setInputValueInt, traitName, attributeName)} id="10" className={`w-4 h-4 cursor-pointer rounded-full bg-lightGrayCube mx-0.5 transition-all duration-200 hover:bg-secondaryColor likelihoodRounded ${isOnly ? removeActiveClass : ""}`} />
                </m.div>
            </m.div>


            <m.div className="w-4/12 flex">
                <m.button onClick={(e) => singleElementClickAttribute(e, setIsOnly, isOnly, setInputValue, setPlaceholderValue, handleClick)} disabled={inputValue.length > 0 ? true : false} className={` 
                    w-16  mr-2 border-2 text-colorText border-secondaryColor text-sm rounded-full transition-all duration-300 
                    ${inputValue === "%" || inputValue === "" ? "hover:bg-secondaryColor hover:text-whiteText" : "blur-[2px]" }
                `}>Only 1</m.button>
                <m.input disabled={isOnly} onChange={(e) => handleInputChange(e, setInputValue, setInputValueInt, traitName, attributeName)} value={inputValue} className={` w-20 p-2 text-sm mr-2 bg-transparent border-2  rounded-3xl ${isOnly ? "blur-[1px]" : "border-lightGray"}`} placeholder={`${placeholderValue}`} type="text" />
                <m.div className=" w-20 p-2 text-sm mr-2 bg-transparent text-center border-2 border-lightGray rounded-3xl text-lightGray " >0</m.div>
            </m.div>

        </m.div>
    )
}