import Rule from "./Rule";
import Link from "next/link";

export default function SavedRules() {

    return(
        <div className=" w-full px-2">
            <h1 className="text-2xl pl-4 text-colorText"> <span className="text-darkText">85</span> Saved Rules</h1>
            <div className="w-full h-[500px] overflow-y-scroll py-10 flex flex-wrap justify-between items-center">
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
            </div>
            <div className="w-full flex justify-between items-center pt-10 px-8">
                <div className=" w-6/12   h-20 flex justify-between items-center 2xl:w-4/12">
                    <Link className=" 
                        p-3 flex justify-center items-center border-2 border-secondaryColor text-colorText text-sm w-52 min-w-[220px] mx-1 rounded-full cursor-pointer z-10
                    " href="/" >
                        <svg className=" mx-2 scale-75" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L8.41 1.41L3.83 6H20V8H3.83L8.42 12.59L7 14L0 7L7 0Z" fill="#565773"/>
                        </svg>
                        <h3>Back to upload layers</h3>
                    </Link>
                    <Link className=" 
                        p-3 flex justify-center items-center border-2 border-secondaryColor text-colorText text-sm w-32 min-w-[140px] mx-1 rounded-full cursor-pointer z-10
                        transition-all duration-200 ease-in-out
                    " href="/" >
                        <svg className=" path mx-2 scale-75" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#565773"/>
                        </svg>
                        <h3>Layer order</h3>
                    </Link>
                    <Link className=" 
                        p-3 flex justify-center items-center border-2 border-secondaryColor text-colorText text-sm w-52 min-w-[200px] mx-1   rounded-full cursor-pointer z-10
                        transition-all duration-200 ease-in-out
                    " href="/artwork/traitsRarity" >
                        <svg className=" path mx-2 scale-75" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#565773"/>
                        </svg>
                        <h3>Trait / Attribute rarity</h3>
                    </Link>
                </div>
                <div className=" h-20 flex justify-center items-center  ">
                    <Link className="bg-secondaryColor text-whiteText p-3 flex justify-center items-center border-2 border-secondaryColor text-sm w-32 rounded-full cursor-pointer z-10 " href="/artwork/applyCombination" >
                        <h3>Next step</h3>
                        <svg className=" mx-2 scale-75 rotate-180" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L8.41 1.41L3.83 6H20V8H3.83L8.42 12.59L7 14L0 7L7 0Z" fill="#ffffff"/>
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
}






