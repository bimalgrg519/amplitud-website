import logo from "@/src/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Footer() {
  return (
    <m.footer layout className="lg:px-28 py-10">
      <div
        className=" 
    flex h-80 p-10 border-t-2 border-dotted justify-between border-secondaryColor 
    large:flex-col 
    "
      >
        <div className="flex flex-col justify-between large:justify-center large:w-full large:items-center ">
          {/* <Image src={logo} width={70} height={70} alt="Amplitud." /> */}
          <svg
            className=" w-14 h-14 large:w-80 large:h-80"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.5 0C22.061 0 16.7442 1.61285 12.2218 4.63458C7.69948 7.65632 4.17473 11.9512 2.09332 16.9762C0.0119154 22.0012 -0.532676 27.5305 0.528417 32.865C1.58951 38.1995 4.20863 43.0995 8.05457 46.9454C11.9005 50.7914 16.8005 53.4105 22.135 54.4716C27.4695 55.5327 32.9988 54.9881 38.0238 52.9067C43.0488 50.8253 47.3437 47.3005 50.3654 42.7782C53.3872 38.2558 55 32.939 55 27.5C55 23.8886 54.2887 20.3127 52.9067 16.9762C51.5247 13.6397 49.4991 10.6082 46.9454 8.05456C44.3918 5.50095 41.3603 3.47532 38.0238 2.09331C34.6873 0.711308 31.1114 0 27.5 0ZM8.51381 35.0905C8.07995 35.0975 7.65326 34.9793 7.28483 34.7501C6.91641 34.5209 6.62186 34.1903 6.43647 33.798C6.25107 33.4056 6.18269 32.9682 6.2395 32.538C6.29631 32.1078 6.47591 31.7031 6.7568 31.3724L18.2172 19.8896C20.3301 17.7518 22.545 16.6294 24.5584 16.6294C26.3005 16.6294 27.9455 17.3934 29.5358 18.9738L38.0943 27.5249H31.7134L27.4602 23.2717C26.0093 21.8208 25.295 21.2609 24.4041 21.2609C23.4634 21.2609 22.662 21.8457 20.5839 23.9337L10.0419 34.4534C9.63431 34.8557 9.08647 35.0841 8.51381 35.0905ZM39.2267 35.9292C37.7335 37.4224 36.2975 38.3756 34.8466 38.3756C33.6993 38.3756 32.5794 37.8405 31.3624 36.6185L29.8095 35.0382C28.0674 33.2563 27.4154 32.8731 25.7082 32.8731H19.591C19.2887 32.8831 18.9876 32.8323 18.7054 32.7235C18.4232 32.6148 18.1658 32.4504 17.9484 32.2402C17.7311 32.0299 17.5582 31.7781 17.4402 31.4997C17.3221 31.2213 17.2613 30.922 17.2613 30.6196C17.2613 30.3172 17.3221 30.0179 17.4402 29.7394C17.5582 29.461 17.7311 29.2092 17.9484 28.9989C18.1658 28.7887 18.4232 28.6243 18.7054 28.5156C18.9876 28.4069 19.2887 28.356 19.591 28.3661H26.9525C28.9634 28.3661 30.0584 29.2072 31.4072 30.5312L33.3982 32.4923C34.0851 33.1792 34.4658 33.5102 34.8242 33.5102C35.1826 33.5102 35.5708 33.1792 36.2502 32.4923L44.8138 23.9337C45.0319 23.6843 45.3027 23.4865 45.6065 23.3543C45.9103 23.2222 46.2397 23.1592 46.5708 23.1697C47.014 23.1759 47.4455 23.3134 47.8105 23.5649C48.1755 23.8164 48.4576 24.1706 48.6212 24.5825C48.7848 24.9945 48.8225 25.4457 48.7296 25.8791C48.6366 26.3125 48.4171 26.7086 48.0989 27.0172L39.2267 35.9292Z"
              fill="#6442FF"
            />
          </svg>
          <h3 className="text-xs min-w-full large:hidden">
            © 2022 Amplitud, All rights reserved.
          </h3>
        </div>
        <div className=" flex flex-col items-start pt-2 large:w-full">
          <h3 className="text-sm text-secondaryColor">Navigate</h3>

          <div className="flex mt-5 ">
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
        <div className=" flex flex-col items-start pt-2 large:mt-5">
          <h3 className="text-sm text-secondaryColor">Social</h3>

          <div className="flex mt-5">
            <svg
              className=" mr-3 cursor-pointer"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 0H1C0.4 0 0 0.4 0 1V17C0 17.5 0.4 18 1 18H9.6V11H7.3V8.3H9.6V6.3C9.6 4 11 2.7 13.1 2.7C14.1 2.7 14.9 2.8 15.2 2.8V5.2H13.8C12.7 5.2 12.5 5.7 12.5 6.5V8.2H15.2L14.8 11H12.5V18H17C17.5 18 18 17.6 18 17V1C18 0.4 17.6 0 17 0Z"
                fill="#222339"
              />
            </svg>
            <svg
              className=" mr-3 cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.8C12.7 1.8 13 1.8 14 1.9C16.8 2 18 3.3 18.1 6C18.1 7 18.2 7.4 18.2 10C18.2 12.6 18.2 13 18.1 14C18 16.7 16.7 18 14 18.1C12.9 18.1 12.6 18.2 10 18.2C7.3 18.2 7 18.2 6 18.1C3.2 18 2 16.7 1.9 14C1.9 12.9 1.8 12.6 1.8 10C1.8 7.3 1.8 7 1.9 6C2 3.3 3.2 2 6 1.9C7 1.8 7.3 1.8 10 1.8V1.8ZM10 0C7.3 0 6.9 -9.68575e-08 5.9 0.0999999C2.2 0.2 0.2 2.2 0.0999999 5.9C-9.68575e-08 6.9 0 7.3 0 10C0 12.7 -9.68575e-08 13.1 0.0999999 14.1C0.3 17.7 2.3 19.7 5.9 19.9C6.9 20 7.3 20 10 20C12.7 20 13.1 20 14.1 19.9C17.7 19.7 19.7 17.7 19.9 14.1C19.9 13 20 12.7 20 10C20 7.3 20 6.9 19.9 5.9C19.7 2.3 17.7 0.2 14.1 0.0999999C13.1 -9.68575e-08 12.7 0 10 0V0ZM10 4.9C7.2 4.9 4.9 7.2 4.9 10C4.9 12.8 7.2 15.1 10 15.1C12.8 15.1 15.1 12.8 15.1 10C15.1 7.2 12.8 4.9 10 4.9V4.9ZM10 13.3C8.2 13.3 6.7 11.8 6.7 10C6.7 8.2 8.2 6.7 10 6.7C11.8 6.7 13.3 8.2 13.3 10C13.3 11.8 11.8 13.3 10 13.3ZM15.3 3.5C14.6 3.5 14.1 4 14.1 4.7C14.1 5.4 14.6 5.9 15.3 5.9C16 5.9 16.5 5.4 16.5 4.7C16.5 4 16 3.5 15.3 3.5Z"
                fill="#222339"
              />
            </svg>
            <svg
              className=" mr-3 cursor-pointer"
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 2.10526C20.1845 2.42105 19.3689 2.73684 18.5534 2.8421C19.4709 2.31579 20.0825 1.36842 20.4903 0.31579C19.6748 0.842105 18.7573 1.15789 17.7379 1.36842C16.9223 0.526316 15.801 0 14.5777 0C11.8252 0 9.68447 2.73684 10.3981 5.57895C6.72816 5.36842 3.56796 3.57895 1.42718 0.842105C0.305825 2.84211 0.815534 5.47368 2.75243 6.8421C2.03884 6.8421 1.42718 6.63158 0.815534 6.31579C0.815534 8.42105 2.24272 10.3158 4.28155 10.8421C3.6699 11.0526 2.95631 11.0526 2.34466 10.9474C2.85437 12.7368 4.48544 14 6.42233 14.1053C4.58738 15.5789 2.34466 16.2105 0 16C1.93689 17.2632 4.17961 18 6.62621 18C14.6796 18 19.165 10.9474 18.9612 4.52632C19.6748 3.78947 20.4903 3.05263 21 2.10526V2.10526Z"
                fill="#222339"
              />
            </svg>
            <svg
              className=" mr-3 cursor-pointer"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0447 1.33141L15.5703 15.6511C15.4068 16.3256 14.6507 16.673 14.0307 16.3528L9.6367 14.0843L7.55891 17.4837C6.99348 18.4102 5.56287 18.0082 5.56287 16.9251V13.1374C5.56287 12.8444 5.68549 12.5651 5.89668 12.3607L14.4599 4.18582C14.4531 4.08364 14.3441 3.99507 14.2351 4.07001L4.01645 11.1822L0.582984 9.41096C-0.220883 8.9954 -0.18682 7.83047 0.644296 7.46941L17.5732 0.0915515C18.3839 -0.262695 19.2559 0.466235 19.0447 1.33141Z"
                fill="#222339"
              />
            </svg>
          </div>
        </div>
        <div className="  w-96 flex flex-col items-start pt-2 large:mt-5 large:w-full ">
          <h3 className="text-sm text-secondaryColor">Join Our Newsletter</h3>

          <div className=" h-48 flex flex-col mt-5 justify-between  large:h-60 large:mt-2 large:justify-start ">
            <div className="p-1 rounded-full border-2 border-inputColor flex justify-between large:mt-2 ">
              <input
                type="text"
                placeholder="Enter Email Adress"
                className=" bg-transparent pl-4 w-7/12 text-sm focus:outline-none"
              />
              <button className="mx-2 p-2 w-28 bg-secondaryColor text-primaryColor rounded-3xl text-xs cursor-pointer">
                Subscribe
              </button>
            </div>

            <h4 className="text-xs  w-full text-lightGray mt-4">
              By submitting your email you agree to our{" "}
              <Link href="/" className="text-secondaryColor underline">
                Terms of Use and Sale
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-secondaryColor underline">
                Privacy Policy.
              </Link>
              You will receive email communications from us for marketing,
              informational, and promotional purposes and can opt-out at any
              time.
            </h4>

            <div className=" justify-center px-10 large:w-full large:flex-col large:justify-center large:items-center  large:mt-4 large:text-center">
              <h3 className=" hidden text-sm mb-2 text-colorText large:block">
                © 2022 Amplitud, All rights reserved.
              </h3>
              <div className="w-full flex justify-end text-sm text-colorText  large:justify-center">
                <Link href="/">Privacy Policy</Link>
                <h4 className="mx-2"> - </h4>
                <Link href="/">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.footer>
  );
}
