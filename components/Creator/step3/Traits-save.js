
import { useState, useEffect } from "react";
import avatar from "@/src/img/avatar.png";
import Image from "next/image";
import { singleElementClick } from "@/utils/tools";
import AttributeType from "./AttributeType";
import { attribute_type } from "@/data/test";
import {motion as m} from 'framer-motion'
import { getPercents, addActiveClass, removeActiveClass, handleInputChangeTrait, getPercentsTrait } from "@/utils/tools";


export default function Traits({trait_name, traitIsValidate}) {

    //trait name without space to use it as id
    const traitName = trait_name.replace(" ", "_");
    //value to check click on open button for each trait
    const [open, setOpen] = useState(false);
    //input value to update input when user click on edge
    const [placeholderValue, setPlaceholderValue] = useState("Enter %");
    const [inputValue, setInputValue] = useState("");
    const [isOnly, setIsOnly] = useState(false);

    //value to check if the trait likelihood is configured
    const [isTraitConfigured, setIsTraitConfigured] = useState(false);

    //value of the percentage input already convert in int without "%" to use maybe for Api
    const [inputValueInt, setInputValueInt] = useState(0);

    //stuff to detect if user setup attributes 
    const [clickedButtons, setClickedButtons] = useState({});
    const [isAllAttributeSetup, setIsAllAttributeSetup] = useState(false);

    const handleButtonClick = (attributeId, isClicked) => {
        setClickedButtons((prev) => ({
          ...prev,
          [attributeId]: isClicked,
        }));
    };

    //first useEffect to check if all attributes are setup
    useEffect(() => {
        const clickedButtonsCount = Object.values(clickedButtons).filter((isClicked) => isClicked).length;
        const clickedButtonsArray = Object.values(clickedButtons);

        // console.log(`Clicked buttons count: ${clickedButtonsCount}, Total attributes: ${attribute_type.length}`);
        if (clickedButtonsCount === attribute_type.length && isTraitConfigured && clickedButtonsArray.every((element) => element === true)) {
        //   console.log("All buttons have been clicked");
          setIsAllAttributeSetup(true);
        } else {
            setIsAllAttributeSetup(false);
        }
      }, [clickedButtons, attribute_type, isTraitConfigured]);
    
    //second useEffect to check if the main trait is setup
    useEffect(() => {

        if(inputValueInt > 0){
            setIsTraitConfigured(true);
        }else{
            setIsTraitConfigured(false);
        }   

      },[inputValueInt]);

      //third useEffect to check if inputvalue is only % in this case remove it
    useEffect(() => {
        if(inputValue.length === 1 && inputValue === "%" ){
            setInputValue("");
        }
    },[inputValue]);




    return(
        <m.div 
            layout 
            className="flex flex-col justify-center items-center w-full"
        >
            <m.div layout className="my-2 flex justify-between items-center w-full">
                <m.div layout className="p-2 bg-lightGrayCube relative rounded-xl w-48 min-w-[170px] text-center flex items-center justify-around mx-2">
                    
                    <svg className={`absolute left-5 transition-all duration-200 ease-in-out ${isAllAttributeSetup ? "opacity-1 -translate-x-0" : " opacity-0 -translate-x-10"}`} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00039 11.2001L1.80039 7.0001L0.400391 8.4001L6.00039 14.0001L18.0004 2.0001L16.6004 0.600098L6.00039 11.2001Z" fill="#6442FF"/>
                    </svg>
                    <h3 className="text-colorText font-gilroy-bold ">{trait_name}</h3>
                </m.div>
                <m.div id={`Container_${traitName}`} layout className={`flex w-80  p-2 mx-2 border-2 border-inputColor rounded-2xl `}>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="1" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn`}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="2" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="3" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="4" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="5" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="6" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="7" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="8" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="9" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn `}></m.div>
                    <m.div onClick={(e) => getPercentsTrait(e, setInputValue, setInputValueInt)} id="10" className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor likelihoodeBtn `}></m.div>
                </m.div>
                
                <m.input disabled={isOnly} onChange={(e) => handleInputChangeTrait(e, setInputValue, setInputValueInt, traitName)} value={inputValue} className={` border-2 border-lightGray bg-transparent rounded-3xl mx-2 w-34 p-2 pl-4 ${isOnly ? "opacity-90 " : "border-lightGray"}`} placeholder={`${placeholderValue}`} type="text" />

                <m.div 
                    layout  
                    onClick={() => setOpen(!open)}  
                    className={`
                        w-14 h-14 min-h-[56px] min-w-[56px] rounded-full border-2 border-secondaryColor flex items-center justify-center cursor-pointer  ${open ? "bg-secondaryColor" : " bg-transparent"}
                        transition-all duration-300 ease-in-out
                         mx-2
                    `}>
                    <svg className={`transition-all duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}  hover:rotate-180`} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={` ${open ? "fill-whiteText" : "fill-colorText"} transition-all duration-300 ease-in-out hover:fill-secondaryColor`}  d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z"  />
                    </svg>
                </m.div>
            </m.div>
            
            <m.div 
                layout
                className={`  w-full px-10 flex flex-col justify-start items-start ${open ? "h-auto opacity-1" : "h-0 opacity-0"}`}
            >
                <m.h2 layout className="font-gilroy-bold text-xl mb-8">Attribute types</m.h2>
                <m.div layout className="flex w-full justify-start mb-8">
                    <m.h3 className="w-1/12">Image</m.h3>
                    <m.h3 className="w-3/12 text-center ">Attribute</m.h3>
                    <m.h3 className="w-4/12 text-center">Likelihood of appearing</m.h3>
                    <m.h3 className="w-4/12 text-end px-2 pr-16 2xl:text-center">No. of NFTs</m.h3>
                </m.div>
                
                <m.div layout  className="w-full h-80 flex flex-col overflow-y-scroll">
                    {
                        attribute_type.map((attribute, index) => (
                            <AttributeType 
                                key={attribute.id}
                                attribute={attribute}
                                traitName={traitName} 
                                name={attribute.name}
                                onButtonClick={handleButtonClick}

                            />
                        ))
                    }

                </m.div>
            </m.div>
        </m.div>
    );

}