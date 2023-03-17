
import avatar from "@/src/img/avatar.png";
import { singleElementClick } from "@/utils/tools";
import Image from "next/image";
import {motion as m} from "framer-motion"
import { useState } from "react";

export default function AttributeType({name}) {


    const [inputValue, setInputValue] = useState("Enter %");


    //function to check add/delete active class on edge and calculate percent to add it to input
    const getPercents = (e) => {
        console.log(e.target.id);
        let nb = e.target.id;
        setInputValue(`${nb * 10}%`)
        const element = e.target;
        const list = element.parentElement;
        const elements =  list.children;
    
        for (let i = 1; i <= elements.length; i++) {
            if (i <= nb) {
                elements[i-1].classList.add("active");
            } else{
                elements[i-1].classList.remove("active");
            }
        }
    }


    return(
        <m.div layout className="flex w-full py-3 justify-between items-center">
            {/* <Image src={avatar} alt="attribute_image" width={"w-1/12"} height={70} /> */}
            <m.div className="w-20 h-20 bg-lightPurple rounded-xl" />
            <m.h2 className="font-bold w-3/12 text-center">{name}</m.h2>
            <m.div className="w-4/12 flex justify-center items-center">
                <m.div className=" flex items-center h-10 py-2 px-2 rounded-xl border-2 border-lightGray">
                    <m.div onClick={getPercents} id="1" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="2" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="3" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="4" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="5" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="6" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="7" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="8" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="9" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                    <m.div onClick={getPercents} id="10" className="w-4 h-4 cursor-pointer rounded-full bg-lightGray mx-0.5 likelihoodRounded" />
                </m.div>
            </m.div>


            <m.div className="w-4/12 flex">
                <m.button onClick={singleElementClick} className=" 
                    w-16  mr-2 border-2 text-colorText border-secondaryColor text-sm rounded-full transition-all duration-300 
                    hover:bg-secondaryColor hover:text-whiteText
                ">Only 1</m.button>
                <m.input className=" w-20 p-2 text-sm mr-2 bg-transparent border-2 border-lightGray rounded-3xl " placeholder={`${inputValue}`} type="text" />
                <m.input className=" w-20 p-2 text-sm mr-2 bg-transparent border-2 border-lightGray rounded-3xl " placeholder="0" type="text" />
            </m.div>

        </m.div>
    )
}