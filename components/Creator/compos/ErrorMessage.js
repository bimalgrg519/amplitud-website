
import {motion as m} from "framer-motion"
import { useState, useContext } from "react";
import { errorMessageAnim } from "@/utils/animation";
import MainContext from "@/lib/context";



export default function ErrorMessage(){

    const {showErrorMessage , setShowErrorMessage} = useContext(MainContext);

    
    return(
        <m.div 
            variants={errorMessageAnim}
            initial="hidden"
            animate={showErrorMessage ? "show" : "hidden"}
            exit="exit"
            id="errorMessage" 
            className={`absolute top-0 right-20 p-4 px-4 min-w-[500px] flex justify-between items-center rounded-xl text-sm large:hidden`}
        >
            <h2>Maximum Limit (50) Is Exceeded To Upload</h2>
            <svg onClick={() => setShowErrorMessage(false)} className={`cursor-pointer`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#565773"/>
            </svg>
        </m.div>
    )
}