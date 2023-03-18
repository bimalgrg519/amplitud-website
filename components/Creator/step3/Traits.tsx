
import { useState } from "react";
import avatar from "/src/img/avatar.png";
import Image from "next/image";
import { singleElementClick } from "@/utils/tools";
import AttributeType from "./AttributeType";
import { attribute_type } from "@/mockup/test";
import { motion as m } from 'framer-motion'
import { getPercents } from "@/utils/tools";


export default function Traits({ trait_name }) {


  //if trait is validate, add check svg
  const [traitValidate, setTraitValidate] = useState(false);
  //value to check click on open button for each trait
  const [open, setOpen] = useState(false);
  //input value to update input when user click on edge
  const [inputValue, setInputValue] = useState("Enter %");


  //function to check add/delete active class on edge and calculate percent to add it to input
  const getPercents = (e) => {
    console.log(e.target.id);
    let nb = e.target.id;
    setInputValue(`${nb * 10}%`)
    const element = e.target;
    const list = element.parentElement;
    const elements = list.children;

    for (let i = 1; i <= elements.length; i++) {
      if (i <= nb) {
        elements[i - 1].classList.add("active");
      } else {
        elements[i - 1].classList.remove("active");
      }
    }
  }



  return (
    <m.div
      layout
      className="flex flex-col justify-center items-center w-full"
    >
      <m.div layout className="my-2 flex justify-between items-center w-full">
        <m.div layout className="p-2 bg-lightGrayCube    rounded-xl w-48 text-center flex items-center justify-around ">
          {traitValidate ? (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00039 11.2001L1.80039 7.0001L0.400391 8.4001L6.00039 14.0001L18.0004 2.0001L16.6004 0.600098L6.00039 11.2001Z" fill="#6442FF" />
            </svg>
          ) : ""}

          <h3 className="text-colorText font-gilroy-bold ">{trait_name}</h3>
        </m.div>
        <m.div layout className="flex w-80  p-2 mx-1 border-2 border-inputColor rounded-2xl">
          <m.div onClick={getPercents} id="1" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="2" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="3" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="4" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="5" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="6" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="7" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="8" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="9" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn"></m.div>
          <m.div onClick={getPercents} id="10" className="w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor likelihoodeBtn"></m.div>
        </m.div>
        <input className=" border-2 border-lightGray bg-transparent rounded-3xl w-34 p-2 pl-4" placeholder={`${inputValue}`} type="text" />
        <m.div
          layout
          onClick={() => setOpen(!open)}
          className={`
                        w-14 h-14 rounded-full border-2 border-secondaryColor flex items-center justify-center cursor-pointer  ${open ? "bg-secondaryColor" : " bg-transparent"}
                        transition-all duration-300 ease-in-out
                    `}>
          <svg className={`transition-all duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}  hover:rotate-180`} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={` ${open ? "fill-whiteText" : "fill-colorText"} transition-all duration-300 ease-in-out hover:fill-secondaryColor`} d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" />
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
          <m.h3 className="w-4/12 text-end px-2">No. of NFTs</m.h3>
        </m.div>

        <m.div layout className="w-full h-80 flex flex-col overflow-y-scroll">
          {
            attribute_type.map((attribute) => (
              <AttributeType key={attribute.id} name={attribute.name} />
            ))
          }

        </m.div>
      </m.div>
    </m.div>
  );

}