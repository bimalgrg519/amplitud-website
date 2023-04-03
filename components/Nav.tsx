import Image from "next/image"
import logo from "@/src/img/logo.png"
import Link from "next/link"
import avatar from "@/src/img/avatar.png"
import { liClickToggle } from "@/utils/tools"



export default function Nav() {


  return (
    <nav className="relative w-screen flex flex-col justify-between items-center lg:px-28  ">
            <div className=" w-screen h-14 bg-lightPurple lg:px-28 flex justify-between items-center px-1">
                    <div className="flex items-center large:w-full large:justify-center">
                        <svg className="mx-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_15087)">
                            <path d="M18 11C18 11.67 18 12.33 18 13C19.2 13 20.76 13 22 13C22 12.33 22 11.67 22 11C20.76 11 19.2 11 18 11Z" fill="#222339"/>
                            <path d="M16 17.61C16.96 18.32 18.21 19.26 19.2 20C19.6 19.47 20 18.93 20.4 18.4C19.41 17.66 18.16 16.72 17.2 16C16.8 16.54 16.4 17.08 16 17.61Z" fill="#222339"/>
                            <path d="M20.4 5.6C20 5.07 19.6 4.53 19.2 4C18.21 4.74 16.96 5.68 16 6.4C16.4 6.93 16.8 7.47 17.2 8C18.16 7.28 19.41 6.35 20.4 5.6Z" fill="#222339"/>
                            <path d="M4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19H7V15H8L13 18V6L8 9H4ZM9.03 10.71L11 9.53V14.47L9.03 13.29L8.55 13H8H4V11H8H8.55L9.03 10.71Z" fill="#222339"/>
                            <path d="M15.5 12.0004C15.5 10.6704 14.92 9.47039 14 8.65039V15.3404C14.92 14.5304 15.5 13.3304 15.5 12.0004Z" fill="#222339"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2_15087">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <h4 className="text-xs text-darkText">Apply for launchpad and for partnerships</h4>
                        <Link href="/" className="text-xs px-2 text-secondaryColor underline cursor-pointer">Apply now!</Link>
                    </div>
                    <div className="flex items-center large:hidden">
                        <h4 className="text-xs mx-2">Volume 24H: <span className="font-gilroy-bold mx-1">61,943</span></h4>
                        <h4 className="text-xs mx-2">Volume total: <span className="font-gilroy-bold mx-1">23,812,298 SOL</span></h4>
                    </div>
            </div>

            <div className="w-full flex justify-between items-center large:w-screen large:px-6 large:mt-2">
                <div className="flex justify-center  items-center">
                    <svg className="" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5 0C22.061 0 16.7442 1.61285 12.2218 4.63458C7.69948 7.65632 4.17473 11.9512 2.09332 16.9762C0.0119154 22.0012 -0.532676 27.5305 0.528417 32.865C1.58951 38.1995 4.20863 43.0995 8.05457 46.9454C11.9005 50.7914 16.8005 53.4105 22.135 54.4716C27.4695 55.5327 32.9988 54.9881 38.0238 52.9067C43.0488 50.8253 47.3437 47.3005 50.3654 42.7782C53.3872 38.2558 55 32.939 55 27.5C55 23.8886 54.2887 20.3127 52.9067 16.9762C51.5247 13.6397 49.4991 10.6082 46.9454 8.05456C44.3918 5.50095 41.3603 3.47532 38.0238 2.09331C34.6873 0.711308 31.1114 0 27.5 0ZM8.51381 35.0905C8.07995 35.0975 7.65326 34.9793 7.28483 34.7501C6.91641 34.5209 6.62186 34.1903 6.43647 33.798C6.25107 33.4056 6.18269 32.9682 6.2395 32.538C6.29631 32.1078 6.47591 31.7031 6.7568 31.3724L18.2172 19.8896C20.3301 17.7518 22.545 16.6294 24.5584 16.6294C26.3005 16.6294 27.9455 17.3934 29.5358 18.9738L38.0943 27.5249H31.7134L27.4602 23.2717C26.0093 21.8208 25.295 21.2609 24.4041 21.2609C23.4634 21.2609 22.662 21.8457 20.5839 23.9337L10.0419 34.4534C9.63431 34.8557 9.08647 35.0841 8.51381 35.0905ZM39.2267 35.9292C37.7335 37.4224 36.2975 38.3756 34.8466 38.3756C33.6993 38.3756 32.5794 37.8405 31.3624 36.6185L29.8095 35.0382C28.0674 33.2563 27.4154 32.8731 25.7082 32.8731H19.591C19.2887 32.8831 18.9876 32.8323 18.7054 32.7235C18.4232 32.6148 18.1658 32.4504 17.9484 32.2402C17.7311 32.0299 17.5582 31.7781 17.4402 31.4997C17.3221 31.2213 17.2613 30.922 17.2613 30.6196C17.2613 30.3172 17.3221 30.0179 17.4402 29.7394C17.5582 29.461 17.7311 29.2092 17.9484 28.9989C18.1658 28.7887 18.4232 28.6243 18.7054 28.5156C18.9876 28.4069 19.2887 28.356 19.591 28.3661H26.9525C28.9634 28.3661 30.0584 29.2072 31.4072 30.5312L33.3982 32.4923C34.0851 33.1792 34.4658 33.5102 34.8242 33.5102C35.1826 33.5102 35.5708 33.1792 36.2502 32.4923L44.8138 23.9337C45.0319 23.6843 45.3027 23.4865 45.6065 23.3543C45.9103 23.2222 46.2397 23.1592 46.5708 23.1697C47.014 23.1759 47.4455 23.3134 47.8105 23.5649C48.1755 23.8164 48.4576 24.1706 48.6212 24.5825C48.7848 24.9945 48.8225 25.4457 48.7296 25.8791C48.6366 26.3125 48.4171 26.7086 48.0989 27.0172L39.2267 35.9292Z" fill="#6442FF"/>
                    </svg>
                    <ul className="flex font-sm text-colorText large:hidden">
                        <li className="mx-4 cursor-pointer  "  onClick={liClickToggle}>Studio</li>
                        <li className="mx-4 cursor-pointer  active" onClick={liClickToggle}>Go Create</li>
                        <li className="mx-4 cursor-pointer  " onClick={liClickToggle}>Messages</li> 
                        <li className="mx-4 cursor-pointer  " onClick={liClickToggle}>History</li>
                        <li className="mx-4 cursor-pointer  " onClick={liClickToggle}>Guide</li>
                        <li className="mx-4 cursor-pointer  " onClick={liClickToggle}>Admin</li>
                    </ul>
                </div>

                <div className="flex  justify-around items-center px-0">
                    <div className=" rounded-full p-2  border-2  border-lightGray m-8 cursor-pointer large:m-2">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.51 21.51C10.51 22.61 11.4 23.5 12.5 23.5C13.6 23.5 14.49 22.61 14.49 21.51H10.51ZM12.5 6.5C15.26 6.5 17.5 8.74 17.5 11.5V18.5H7.5V11.5C7.5 8.74 9.74 6.5 12.5 6.5ZM12.5 2C11.67 2 11 2.67 11 3.5V4.67C7.86 5.35 5.5 8.15 5.5 11.5V17.5L3.5 19.5V20.5H21.5V19.5L19.5 17.5V11.5C19.5 8.15 17.14 5.35 14 4.67V3.5C14 2.67 13.33 2 12.5 2Z" fill="#565773"/>
                            <circle cx="18.5" cy="8.5" r="4" fill="#6442FF"/>
                        </svg>
                    </div>
                    <div className="flex items-center py-2 px-6 border-2 border-lightGray rounded-3xl cursor-pointer large:px-1">
                        <svg className="mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_49_3563)">
                            <path d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z" fill="#565773"/>
                            <path d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z" fill="#565773"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_49_3563">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <h4 className="text-sm text-colorText large:hidden">0bey...9adn</h4>
                    </div>
                    <div className="relative mx-2 cursor-pointer">
                        <Image className=" min-w-[40px] min-h-[40px] " src={avatar} width={50} height={50} alt="avatar" />
                        <svg className="absolute -bottom-1 -right-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_49_3553)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.5093 9.97034C19.2246 9.66864 19.0408 9.28621 18.9833 8.87586C18.9259 8.46552 18.9975 8.04749 19.1884 7.6795C19.3277 7.41189 19.4046 7.11632 19.4132 6.81491C19.4219 6.51349 19.3622 6.21401 19.2385 5.93886C19.1158 5.66663 18.9315 5.42649 18.7001 5.23729C18.4687 5.0481 18.1965 4.915 17.9048 4.84846C17.4994 4.75543 17.1346 4.53522 16.8639 4.22014C16.5931 3.90506 16.4308 3.51171 16.4006 3.09782C16.3737 2.79845 16.2794 2.50899 16.1249 2.25094C15.9704 1.99289 15.7596 1.77289 15.5082 1.60727C15.2568 1.44472 14.971 1.3429 14.6733 1.3099C14.3756 1.27691 14.0743 1.31365 13.7934 1.4172C13.4043 1.5585 12.9801 1.57159 12.583 1.45455C12.1859 1.33751 11.8369 1.09652 11.5873 0.766967C11.4068 0.528698 11.1735 0.335426 10.9055 0.202345C10.6375 0.0692633 10.3423 0 10.043 0C9.74363 0 9.44838 0.0692633 9.18042 0.202345C8.91245 0.335426 8.67909 0.528698 8.49867 0.766967C8.24903 1.09652 7.90004 1.33751 7.50295 1.45455C7.10586 1.57159 6.68161 1.5585 6.29253 1.4172C6.01158 1.31365 5.71029 1.27691 5.41261 1.3099C5.11493 1.3429 4.82907 1.44472 4.57776 1.60727C4.33003 1.76978 4.1215 1.98505 3.96717 2.2376C3.81285 2.49015 3.71658 2.77369 3.68528 3.06781C3.65513 3.4817 3.49278 3.87505 3.22205 4.19013C2.95133 4.50521 2.5865 4.72542 2.1811 4.81845C1.88943 4.88499 1.6172 5.01809 1.38578 5.20728C1.15437 5.39648 0.970081 5.63662 0.84739 5.90885C0.71596 6.18025 0.647695 6.47776 0.647695 6.77917C0.647695 7.08058 0.71596 7.37809 0.84739 7.64949C1.0517 8.01586 1.13548 8.437 1.0869 8.85343C1.03832 9.26987 0.859829 9.66056 0.576637 9.97034C0.365039 10.1775 0.20427 10.4307 0.106864 10.7101C0.00945682 10.9894 -0.0219555 11.2875 0.0150754 11.5809C0.0686095 11.8723 0.186335 12.1482 0.359753 12.3887C0.53317 12.6291 0.75795 12.8282 1.01786 12.9714C1.38556 13.1742 1.68017 13.487 1.86009 13.8657C2.04001 14.2444 2.09618 14.6699 2.02065 15.0822C1.95871 15.3734 1.96475 15.6749 2.03831 15.9634C2.11186 16.2519 2.25096 16.5197 2.44484 16.746C2.63872 16.9723 2.88219 17.151 3.1564 17.2684C3.43062 17.3858 3.72824 17.4388 4.02623 17.4231C4.43942 17.4176 4.84421 17.5396 5.18526 17.7724C5.5263 18.0052 5.78693 18.3374 5.93153 18.7235C6.03733 19.0022 6.20636 19.2527 6.42538 19.4553C6.6444 19.658 6.90747 19.8073 7.19398 19.8916C7.4805 19.9759 7.78269 19.9928 8.07688 19.9412C8.37108 19.8895 8.6493 19.7707 8.88975 19.5939C9.22747 19.3571 9.63019 19.23 10.043 19.23C10.4557 19.23 10.8585 19.3571 11.1962 19.5939C11.4374 19.7809 11.7197 19.9083 12.0197 19.9656C12.3198 20.0229 12.6293 20.0085 12.9227 19.9236C13.2162 19.8387 13.4853 19.6857 13.7081 19.4771C13.9309 19.2685 14.101 19.0103 14.2045 18.7235C14.3525 18.3529 14.6082 18.0348 14.9388 17.8102C15.2694 17.5856 15.6597 17.4647 16.0597 17.4631C16.3577 17.4788 16.6553 17.4259 16.9295 17.3085C17.2037 17.191 17.4472 17.0123 17.6411 16.786C17.835 16.5597 17.9741 16.2919 18.0476 16.0034C18.1212 15.7149 18.1272 15.4134 18.0653 15.1222C17.9806 14.7039 18.0323 14.2695 18.2127 13.8826C18.3931 13.4956 18.6928 13.1764 19.0681 12.9714C19.3119 12.8173 19.5195 12.6124 19.6767 12.3709C19.8338 12.1293 19.9369 11.8568 19.9788 11.5719C20.0207 11.2869 20.0004 10.9963 19.9194 10.7199C19.8383 10.4435 19.6985 10.1878 19.5093 9.97034Z" fill="#33C1FF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.48 13.52L8.99 14L9.5 13.51L15 8.12L13.97 7L8.99 11.89L6.01 9.13L5 10.27L8.48 13.52Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_49_3553">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>   
                    <div className=" hidden large:flex large:flex-col large:justify-end large:items-end large:ml-5">
                        <div className="w-8 h-1 my-0.5 bg-secondaryColor" />
                        <div className="w-5 h-1 my-0.5 bg-secondaryColor" />
                        <div className="w-8 h-1 my-0.5 bg-secondaryColor" />
                    </div>           
                </div>
            </div>

        </nav>
  )
}