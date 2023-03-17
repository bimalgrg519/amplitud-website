import logo from "../src/img/logo.png"
import Image from "next/image"
import Link from "next/link"
import {motion as m} from 'framer-motion'



export default function Footer() {

    return(
        <m.footer layout className=" flex h-80 w-11/12 m-auto mt-10 p-4 border-t-2 border-dotted justify-between border-secondaryColor">
            <div className="flex flex-col justify-between  ">
                <Image src={logo} width={70} height={70} alt="Amplitud." />
                <h3 className="text-xs min-w-full">© 2022 Amplitud, All rights reserved.</h3>
            </div>
            <div className=" flex flex-col items-start pt-2">
                <h3 className="text-sm text-secondaryColor">Navigate</h3>

                <div className="flex mt-5">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-sm mb-2">Home</h3>
                        <h3 className="text-sm mb-2">Incubator</h3>
                        <h3 className="text-sm mb-2">Explore</h3>
                        <h3 className="text-sm mb-2">Sign in</h3>
                    </div>
                    <div className="flex flex-col justify-start ml-6 w-24">
                        <h3 className="text-sm mb-2">The Studio</h3>
                        <h3 className="text-sm mb-2">My NFTs</h3>
                        <h3 className="text-sm mb-2">DeFi</h3>
                        <h3 className="text-sm mb-2">Rental</h3>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-start pt-2">
                <h3 className="text-sm text-secondaryColor">Social</h3>

                <div className="flex mt-5">
                    <svg className=" mr-3 cursor-pointer" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0H1C0.4 0 0 0.4 0 1V17C0 17.5 0.4 18 1 18H9.6V11H7.3V8.3H9.6V6.3C9.6 4 11 2.7 13.1 2.7C14.1 2.7 14.9 2.8 15.2 2.8V5.2H13.8C12.7 5.2 12.5 5.7 12.5 6.5V8.2H15.2L14.8 11H12.5V18H17C17.5 18 18 17.6 18 17V1C18 0.4 17.6 0 17 0Z" fill="#222339"/>
                    </svg>
                    <svg className=" mr-3 cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.8C12.7 1.8 13 1.8 14 1.9C16.8 2 18 3.3 18.1 6C18.1 7 18.2 7.4 18.2 10C18.2 12.6 18.2 13 18.1 14C18 16.7 16.7 18 14 18.1C12.9 18.1 12.6 18.2 10 18.2C7.3 18.2 7 18.2 6 18.1C3.2 18 2 16.7 1.9 14C1.9 12.9 1.8 12.6 1.8 10C1.8 7.3 1.8 7 1.9 6C2 3.3 3.2 2 6 1.9C7 1.8 7.3 1.8 10 1.8V1.8ZM10 0C7.3 0 6.9 -9.68575e-08 5.9 0.0999999C2.2 0.2 0.2 2.2 0.0999999 5.9C-9.68575e-08 6.9 0 7.3 0 10C0 12.7 -9.68575e-08 13.1 0.0999999 14.1C0.3 17.7 2.3 19.7 5.9 19.9C6.9 20 7.3 20 10 20C12.7 20 13.1 20 14.1 19.9C17.7 19.7 19.7 17.7 19.9 14.1C19.9 13 20 12.7 20 10C20 7.3 20 6.9 19.9 5.9C19.7 2.3 17.7 0.2 14.1 0.0999999C13.1 -9.68575e-08 12.7 0 10 0V0ZM10 4.9C7.2 4.9 4.9 7.2 4.9 10C4.9 12.8 7.2 15.1 10 15.1C12.8 15.1 15.1 12.8 15.1 10C15.1 7.2 12.8 4.9 10 4.9V4.9ZM10 13.3C8.2 13.3 6.7 11.8 6.7 10C6.7 8.2 8.2 6.7 10 6.7C11.8 6.7 13.3 8.2 13.3 10C13.3 11.8 11.8 13.3 10 13.3ZM15.3 3.5C14.6 3.5 14.1 4 14.1 4.7C14.1 5.4 14.6 5.9 15.3 5.9C16 5.9 16.5 5.4 16.5 4.7C16.5 4 16 3.5 15.3 3.5Z" fill="#222339"/>
                    </svg>
                    <svg className=" mr-3 cursor-pointer" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 2.10526C20.1845 2.42105 19.3689 2.73684 18.5534 2.8421C19.4709 2.31579 20.0825 1.36842 20.4903 0.31579C19.6748 0.842105 18.7573 1.15789 17.7379 1.36842C16.9223 0.526316 15.801 0 14.5777 0C11.8252 0 9.68447 2.73684 10.3981 5.57895C6.72816 5.36842 3.56796 3.57895 1.42718 0.842105C0.305825 2.84211 0.815534 5.47368 2.75243 6.8421C2.03884 6.8421 1.42718 6.63158 0.815534 6.31579C0.815534 8.42105 2.24272 10.3158 4.28155 10.8421C3.6699 11.0526 2.95631 11.0526 2.34466 10.9474C2.85437 12.7368 4.48544 14 6.42233 14.1053C4.58738 15.5789 2.34466 16.2105 0 16C1.93689 17.2632 4.17961 18 6.62621 18C14.6796 18 19.165 10.9474 18.9612 4.52632C19.6748 3.78947 20.4903 3.05263 21 2.10526V2.10526Z" fill="#222339"/>
                    </svg>
                    <svg className=" mr-3 cursor-pointer" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0447 1.33141L15.5703 15.6511C15.4068 16.3256 14.6507 16.673 14.0307 16.3528L9.6367 14.0843L7.55891 17.4837C6.99348 18.4102 5.56287 18.0082 5.56287 16.9251V13.1374C5.56287 12.8444 5.68549 12.5651 5.89668 12.3607L14.4599 4.18582C14.4531 4.08364 14.3441 3.99507 14.2351 4.07001L4.01645 11.1822L0.582984 9.41096C-0.220883 8.9954 -0.18682 7.83047 0.644296 7.46941L17.5732 0.0915515C18.3839 -0.262695 19.2559 0.466235 19.0447 1.33141Z" fill="#222339"/>
                    </svg>

                </div>
            </div>
            <div className="  w-96 flex flex-col items-start pt-2">

                <h3 className="text-sm text-secondaryColor">Join Our Newsletter</h3>

                <div className=" h-48 flex flex-col mt-5 justify-between ">
                    <div className="p-1 rounded-full border-2 border-inputColor flex justify-between ">
                        <input type="text" placeholder="Enter Email Adress" className="bg-transparent pl-4 w-7/12 text-sm focus:outline-none"/>
                        <button className="mx-2 p-2 w-28 bg-secondaryColor text-primaryColor rounded-3xl text-xs cursor-pointer">Subscribe</button>
                    </div>

                    <h4 className="text-xs  w-full text-lightGray mt-4">
                        By submitting your email you agree to our <Link href="/" className="text-secondaryColor underline">Terms of Use and Sale</Link> and <Link href="/" className="text-secondaryColor underline">Privacy Policy.</Link>
                        You will receive email communications from us for marketing, informational, and promotional purposes and can opt-out at any time.
                    </h4>

                    <div className="w-full flex justify-end text-sm">
                        <Link href="/">Privacy Policy</Link>
                        <h4 className="mx-2"> - </h4>
                        <Link href="/">Terms & Conditions</Link>
                    </div>

                </div>

            </div>

        </m.footer>
    )

}