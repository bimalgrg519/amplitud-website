import { liClickToggle } from "@/utils/tools";

export default function CreatorNav() {
  return (
    <div
      id='creatorNav'
      className='relative h-20 flex items-end w-full text-lg text-colorText font-gilroy-medium'
    >
      <h3 onClick={liClickToggle} className=' px-10 py-4 cursor-pointer'>
        Details
      </h3>
      <h3 onClick={liClickToggle} className=' px-10 py-4 cursor-pointer'>
        Preview
      </h3>
      <h3 onClick={liClickToggle} className=' px-10 py-4 cursor-pointer active'>
        Artwork
      </h3>
      <h3 onClick={liClickToggle} className=' px-10 py-4 cursor-pointer'>
        Review
      </h3>
      <h3 onClick={liClickToggle} className=' px-10 py-4 cursor-pointer'>
        Launch
      </h3>
      <div className=' absolute bottom-0 h-[2px] z-10 w-full bg-lightGray'></div>
      {/* <div className=" absolute bottom-0 h-[3px] z-0 w-36 bg-secondaryColor transition-all duration-100 ease-in"></div> */}
    </div>
  );
}
