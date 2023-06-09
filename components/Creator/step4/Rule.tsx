import type { IRules, IFullTrait } from "@/store/slices/traitSlice";
import { FC } from "react";
import { connect } from "react-redux";
import artwork from "@/utils/generator";
interface IProps {
  rule: IRules;
  traits: IFullTrait;
}

const mapStateToProps = (state) => {
  return {
    traits: state?.trait?.traitState,
  };
};

export default connect(
  mapStateToProps,
  null
)<FC<IProps>>(({ rule, traits }) => {
  const pngs = artwork.generateRulePreview(
    traits.traits_and_attributes,
    traits.trait_order,
    rule,
    4
  );

  const sentenceType =
    rule.type === "exclusion" ? "Cannot combine with" : "Combine with";
  return (
    <div className='w-[45%] m-4 h-80 2xl:h-96 border-2 border-lightGray rounded-xl flex flex-col justify-center items-center'>
      <div className='w-full flex justify-around items-center'>
        <div className=' mx-4 flex justify-center flex-col'>
          <div className='flex pl-2 flex-col justify-start items-start pt-5'>
            <h3 className='text-xs text-lightGray'>{rule.trait}</h3>
            <h2 className='text-sm text-colorText'>{rule.attribute}</h2>
          </div>
          <div className='my-5'>
            <div
              className=' w-28  h-28  bg-lightPurple rounded-xl 2xl:w-40 2xl:h-40 relative'
              style={{ overflow: "hidden" }}
            >
              {pngs[0] &&
                pngs[0].map((e, i) => {
                  return (
                    <img
                      src={process.env.NEXT_PUBLIC_S3_URL + e}
                      className='superpose'
                      style={{ zIndex: 10 + i }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className=' mx-4 flex justify-center flex-col'>
          <div className='flex pl-2 flex-col justify-start items-start pt-5'>
            <h3 className='text-xs text-lightGray'>Rule type</h3>
            <h2 className='text-sm text-colorText'>{sentenceType}</h2>
          </div>
          <div className='my-5 flex '>
            <div
              className=' w-28  h-28  bg-lightPurple rounded-xl  2xl:w-40 2xl:h-40 relative'
              style={{ overflow: "hidden" }}
            >
              {pngs[1] &&
                pngs[1].map((e, i) => {
                  return (
                    <img
                      src={process.env.NEXT_PUBLIC_S3_URL + e}
                      className='superpose'
                      style={{ zIndex: 10 + i }}
                    />
                  );
                })}
            </div>
            <div
              className=' w-28  h-28  bg-lightPurple rounded-xl ml-6  2xl:w-40 2xl:h-40 relative'
              style={{ overflow: "hidden" }}
            >
              {pngs[2] &&
                pngs[2].map((e, i) => {
                  return (
                    <img
                      src={process.env.NEXT_PUBLIC_S3_URL + e}
                      className='superpose'
                      style={{ zIndex: 10 + i }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className=' mx-4 flex justify-center flex-col'>
          <div className='flex pl-2 flex-col justify-start items-start pt-5'>
            <h3 className='text-xs text-lightGray'>
              {rule.others.map((e) => e.trait).join(" - ")}
            </h3>
            <h2 className='text-sm text-colorText'>
              {rule.others.map((e) => e.attribute).join(" - ")}
            </h2>
          </div>
          <div className='my-5'>
            <div
              className=' w-28  h-28  bg-lightPurple rounded-xl 2xl:w-40 2xl:h-40 relative'
              style={{ overflow: "hidden" }}
            >
              {pngs[3] &&
                pngs[3].map((e, i) => {
                  return (
                    <img
                      src={process.env.NEXT_PUBLIC_S3_URL + e}
                      className='superpose'
                      style={{ zIndex: 10 + i }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-between px-8 my-5'>
        <button
          className='
                    w-28 p-2 rounded-full text-sm bg-transparent border-2 border-secondaryColor text-colorText
                    transition-all duration-300 ease-in-out hover:bg-secondaryColor hover:text-whiteText
                '
        >
          Edit Rule
        </button>
        <button
          className='
                    w-28 p-2 rounded-full text-sm bg-secondaryColor text-whiteText border-2 border-secondaryColor
                    transition-all duration-300 ease-in-out hover:bg-transparent hover:text-secondaryColor
                '
        >
          Delete
        </button>
      </div>
    </div>
  );
});

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
