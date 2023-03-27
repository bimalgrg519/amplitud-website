


export default function Rule() {
    

    return(
        <div className="w-[45%] m-4 h-80 2xl:h-96  border-2 border-lightGray rounded-xl flex flex-col justify-center items-center">
            
            <div className="w-full flex justify-around items-center ">

                <div className="w-full flex justify-center items-center flex-col">
                    <div className="flex w-full justify-around items-start pt-5 ">
                        <div className="flex w-1/5  flex-col">
                            <h3 className="text-xs 2xl:text-sm text-colorText">Eye Color</h3>
                            <h2 className="text-xs 2xl:text-lg font-gilroy-bold text-colorText">Cyan</h2>
                        </div>
                        <div className="flex w-2/5 flex-col ">
                            <h3 className="text-xs 2xl:text-sm text-colorText">Rule type</h3>
                            <h2 className="text-xs 2xl:text-lg font-gilroy-bold text-colorText">Cannot combine with</h2>
                        </div>
                        <div className="flex w-1/5 flex-col pl-2">
                            <h3 className="text-xs 2xl:text-sm text-colorText">Bottom LID</h3>
                            <h2 className="text-xs 2xl:text-lg font-gilroy-bold text-colorText">High-20, Low-40</h2>
                        </div>

                    </div>
                    <div className="flex w-full justify-around">
                        <div className="my-5 w-1/5 aspect-square  bg-lightGrayCube rounded-xl" />  
                        <div className="my-5 w-1/5 aspect-square  bg-lightGrayCube rounded-xl" />  
                        <div className="my-5 w-1/5 aspect-square  bg-lightGrayCube rounded-xl" />  
                        <div className="my-5 w-1/5 aspect-square  bg-lightGrayCube rounded-xl" />  
                    </div>
                </div>


                {/* <div className="w-1/5 flex justify-center items-center flex-col">
                    <div className="flex w-full pl-2 flex-col justify-start items-start pt-5">
                        <h3 className="text-xs text-lightGray">Eye Color</h3>
                        <h2 className="text-sm text-colorText">Cyan</h2>
                    </div>
                    <div className="my-5 w-4/5 aspect-square  bg-secondaryColor rounded-xl" />  
                </div>

                <div className="w-2/5  flex justify-center flex-col">
                    <div className="flex w-full pl-2 flex-col justify-start items-start pt-5">
                        <h3 className="text-xs text-lightGray">Eye Color</h3>
                        <h2 className="text-sm text-colorText">Cyan</h2>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="my-5 mx-2 w-2/5 aspect-square  bg-secondaryColor rounded-xl" />  
                        <div className="my-5 mx-2 w-2/5 aspect-square  bg-secondaryColor rounded-xl" />  
                    </div>
                </div>

                <div className="w-1/5 flex justify-center items-center flex-col">
                    <div className="flex w-full pl-2 flex-col justify-start items-start pt-5">
                        <h3 className="text-xs text-lightGray">Eye Color</h3>
                        <h2 className="text-sm text-colorText">Cyan</h2>
                    </div>
                    <div className="my-5 w-4/5  aspect-square  bg-secondaryColor rounded-xl" />  
                </div> */}

                {/* <div className=" mx-4 flex justify-center flex-col">
                    <div className="flex pl-2 flex-col justify-start items-start pt-5">
                        <h3 className="text-xs text-lightGray">Eye Color</h3>
                        <h2 className="text-sm text-colorText">Cyan</h2>
                    </div>
                    <div className="my-5">
                        <div className=" w-28 h-28  bg-lightPurple rounded-xl xl:w-32 xl:h-32  2xl:w-36 2xl:h-40" />
                    </div>
                </div>
                 <div className=" mx-4 flex justify-center flex-col">
                    <div className="flex pl-2 flex-col justify-start items-start pt-5">
                        <h3 className="text-xs text-lightGray">Rule type</h3>
                        <h2 className="text-sm text-colorText">Cannot combine with</h2>
                    </div>
                    <div className="my-5 flex ">
                        <div className=" w-28  h-28  bg-lightPurple rounded-xl xl:w-32 xl:h-32  2xl:w-36 2xl:h-40" />
                        <div className=" w-28  h-28  bg-lightPurple rounded-xl ml-6 xl:w-32 xl:h-32  2xl:w-36 2xl:h-40" />
                    </div>
                </div>
                <div className=" mx-4 flex justify-center flex-col">
                    <div className="flex pl-2 flex-col justify-start items-start pt-5">
                        <h3 className="text-xs text-lightGray">Eye Color</h3>
                        <h2 className="text-sm text-colorText">High 20, Low-40</h2>
                    </div>
                    <div className="my-5">
                        <div className=" w-28  h-28  bg-lightPurple rounded-xl xl:w-32 xl:h-32 2xl:w-36 2xl:h-36" />
                    </div>
                </div> */}

            </div>

            <div className="w-full flex justify-between px-8 my-5">
                <button className="
                    w-28 p-2 rounded-full text-sm bg-transparent border-2 border-secondaryColor text-colorText
                    transition-all duration-300 ease-in-out hover:bg-secondaryColor hover:text-whiteText
                ">Edit Rule</button>
                <button className="
                    w-28 p-2 rounded-full text-sm bg-secondaryColor text-whiteText border-2 border-secondaryColor
                    transition-all duration-300 ease-in-out hover:bg-transparent hover:text-secondaryColor
                ">Delete</button>
            </div>
        </div>
    )
}




/*
        <div className=" w-full px-2">
            <h1 className="text-2xl"> <span className="text-colorText">85</span> Saved Rules</h1>
            <div className="w-full py-10 flex flex-wrap ">
                <div className="w-1/2 h-72 border-2 border-lightGrayCube rounded-xl flex flex-col justify-center items-center">
                    <div className=" p-4 w-full flex justify-center items-center">
                        <div className="p-2 flex flex-col justify-center items-center">
                            <div className=" pl-2 w-full flex flex-col justify-start items-start">
                                    <h3 className="text-sm text-lightGray">Eye Color</h3>
                                    <h2 className="text-lg text-colorText">Cyan</h2>
                            </div>
                            <div className="w-full flex justify-start items-start mt-3">
                                    <div className=" w-28 h-28 bg-lightPurple rounded-xl" />
                            </div>
                        </div>
                        <div className="p-2 flex flex-col justify-center items-center">
                            <div className=" pl-2 w-full flex flex-col justify-start items-start">
                                    <h3 className="text-sm text-lightGray">Rule type</h3>
                                    <h2 className="text-lg text-colorText">Cannot Combine with</h2>
                            </div>
                            <div className="w-full flex justify-start items-start mt-3">
                                    <div className=" w-28 h-28 bg-lightPurple rounded-xl" />
                                    <div className=" w-28 h-28 bg-lightPurple rounded-xl mx-4" />
                            </div>
                        </div>
                        <div className="p-2 flex flex-col justify-center items-center">
                            <div className=" pl-2 w-full flex flex-col justify-start items-start">
                                    <h3 className="text-sm text-lightGray">Bottom LID</h3>
                                    <h2 className="text-lg text-colorText">High 20, Low-40</h2>
                            </div>
                            <div className="w-full flex justify-start items-start mt-3">
                                    <div className=" w-28 h-28 bg-lightPurple rounded-xl" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Edit Rule</button>
                        <button>Delete</button>
                    </div>

                </div>

            </div>
        </div>
*/