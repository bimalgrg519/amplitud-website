


export default function FirstSection() {
    return(
        <div className="w-screen h-full flex flex-col justify-start items-center mt-10 lg:flex-row lg:px-28 lg:h-[70vh]">
            <div className="w-full h-1/2  flex flex-col text-center justify-center items-center  lg:w-1/2 lg:px-0 lg:items-start lg:text-left">
                <h1 className="text-5xl lg:text-6xl text-darkText">Focus on <br /> your creativity</h1>
                <p className="mt-4">Amplitud's creators tools are here to assist in executing your vision</p>
                <div className="w-full flex justify-center items-center mt-10 lg:justify-start ">
                    <svg className="w-4 h-4 mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" fill="#6442FF"/>
                        <g clip-path="url(#clip0_231_7910)">
                        <path d="M5.41772 4.39507C5.12231 4.22203 4.88281 4.36378 4.88281 4.71144V7.27697C4.88281 7.62497 5.12231 7.76654 5.41772 7.59366L7.6136 6.30766C7.90911 6.13456 7.90911 5.85411 7.6136 5.68105L5.41772 4.39507Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_231_7910">
                        <rect x="4.28125" y="3.88721" width="4.22535" height="4.22535" rx="2.11268" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <p>Learn more about Amplitud</p>
                </div>
            </div>

            <div className=" relative w-5/6 h-80 rounded-xl bg-alertBoxBg  flex flex-col justify-center items-center text-center lg:w-1/2">
                {/* <div className=" z-20  w-full h-full rounded-xl absolute top-0 left-0" /> */}
            
                <div className="lg:hidden w-full h-full flex flex-col justify-center items-center  rounded-xl  absolute top-0 left-0 z-50 ">
                    <h1 className="text-darkText text-3xl text-center">Please connect <br /> via desktop</h1>
                </div>
                <div className=" z-10 w-full lg:w-5/6 h-full blur-[6px] lg:blur-[0px]  rounded-xl absolute top-0 left-0 flex flex-col justify-center items-center">
                    <h1 className=" blur-none  text-darkText text-3xl lg:text-4xl">Welcome to Amplitud's <br /> Creator Portal</h1>
                    <button className=" p-3 w-44 bg-secondaryColor text-whiteText text-sm rounded-full mt-5 mb-5">Connect Wallet</button>

                    <div className=" p-1 rounded-full border-2 border-inputColor flex justify-between large:mt-2 ">
                            <input type="text" placeholder="Enter Email Adress" className=" bg-transparent pl-4 w-7/12 text-sm focus:outline-none"/>
                            <button className="mx-2 my-2 p-2 w-28 bg-secondaryColor text-primaryColor rounded-3xl text-xs cursor-pointer">Subscribe</button>
                    </div>
                </div>

                {/* <svg className="absolute bottom-10 -right-40 yellowSvg " width="231" height="59" viewBox="0 0 231 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M123.16 56L109.697 43L96.2382 56L82.7771 43L69.3141 56L55.853 43L42.3919 56L28.9289 43L15.4649 56L2 43" stroke="#33C1FF" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M228.999 56L215.537 43L202.078 56L188.617 43L175.154 56L161.693 43L148.232 56L134.769 43L121.305 56L107.84 43" stroke="#33C1FF" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M123.16 36L109.697 23L96.2382 36L82.7771 23L69.3141 36L55.853 23L42.3919 36L28.9289 23L15.4649 36L2 23" stroke="#33C1FF" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M228.999 36L215.537 23L202.078 36L188.617 23L175.154 36L161.693 23L148.232 36L134.769 23L121.305 36L107.84 23" stroke="#33C1FF" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M123.16 16L109.697 3L96.2382 16L82.7771 3L69.3141 16L55.853 3L42.3919 16L28.9289 3L15.4649 16L2 3" stroke="#33C1FF" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M228.999 16L215.537 3L202.078 16L188.617 3L175.154 16L161.693 3L148.232 16L134.769 3L121.305 16L107.84 3" stroke="#33C1FF" stroke-width="3.78" stroke-miterlimit="10"/>
                </svg> */}
  

                <svg  className="absolute top-10 -left-40 yellowSvg" width="210" height="59" viewBox="0 0 210 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M111.951 56L99.7342 43L87.5202 56L75.3044 43L63.0868 56L50.871 43L38.6552 56L26.4377 43L14.2193 56L2 43" stroke="url(#paint0_linear_2_13323)" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M208 56L195.783 43L183.569 56L171.353 43L159.136 56L146.92 43L134.704 56L122.487 43L110.268 56L98.0488 43" stroke="url(#paint1_linear_2_13323)" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M111.951 36L99.7342 23L87.5202 36L75.3044 23L63.0868 36L50.871 23L38.6552 36L26.4377 23L14.2193 36L2 23" stroke="url(#paint2_linear_2_13323)" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M208 36L195.783 23L183.569 36L171.353 23L159.136 36L146.92 23L134.704 36L122.487 23L110.268 36L98.0488 23" stroke="url(#paint3_linear_2_13323)" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M111.951 16L99.7342 3L87.5202 16L75.3044 3L63.0868 16L50.871 3L38.6552 16L26.4377 3L14.2193 16L2 3" stroke="url(#paint4_linear_2_13323)" stroke-width="3.78" stroke-miterlimit="10"/>
                    <path d="M208 16L195.783 3L183.569 16L171.353 3L159.136 16L146.92 3L134.704 16L122.487 3L110.268 16L98.0488 3" stroke="url(#paint5_linear_2_13323)" stroke-width="3.78" stroke-miterlimit="10"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_13323" x1="588.884" y1="-53.4663" x2="700.236" y2="-53.4663" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFAD44"/>
                    <stop offset="1" stop-color="#FE893E"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_13323" x1="684.933" y1="-53.4663" x2="796.285" y2="-53.4663" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFAD44"/>
                    <stop offset="1" stop-color="#FE893E"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2_13323" x1="588.884" y1="-53.459" x2="700.236" y2="-53.459" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFAD44"/>
                    <stop offset="1" stop-color="#FE893E"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2_13323" x1="684.933" y1="-53.459" x2="796.285" y2="-53.459" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFAD44"/>
                    <stop offset="1" stop-color="#FE893E"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_2_13323" x1="588.884" y1="-53.4518" x2="700.236" y2="-53.4518" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFAD44"/>
                    <stop offset="1" stop-color="#FE893E"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_2_13323" x1="684.933" y1="-53.4518" x2="796.285" y2="-53.4518" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFAD44"/>
                    <stop offset="1" stop-color="#FE893E"/>
                    </linearGradient>
                    </defs>
                </svg>

            </div>
        </div>
    )
}