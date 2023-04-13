import { FC, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  isActivePercent,
  convertConformityDecimal,
  getPercents,
  checkWeightConfomityAttribute,
} from "@/utils/tools";
import { motion as m } from "framer-motion";
import type { ITraitAttribute, ITraitDetail } from "@/store/slices/traitSlice";
import { updateAtributeWeight } from "@/store/slices/traitSlice";
import { setErrorState } from "@/store/slices/errorSlice";

interface IProps {
  attribute: ITraitAttribute;
  trait: ITraitDetail;
  updateAtributeWeight: any;
  setErrorState: any;
  index: number;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateAtributeWeight,
      setErrorState,
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)<FC<IProps>>(
  ({ attribute, trait, updateAtributeWeight, setErrorState, index }) => {
    // const [inputValue, setInputValue] = useState("Enter %");

    const displayWeight =
      attribute.weight !== null && !attribute.onlyone
        ? convertConformityDecimal(attribute.weight * 100)
        : null;

    // console.log('displayWeight', attribute)

    return (
      <m.div layout className='flex w-full py-3 justify-between items-center'>
        <m.div
          className='w-20 h-20 bg-lightPurple rounded-xl'
          style={{ overflow: "hidden" }}
        >
          <img src={process.env.NEXT_PUBLIC_S3_URL + attribute.file} />
        </m.div>
        <m.h2 className='font-bold w-3/12 text-center'>{attribute.id}</m.h2>
        <m.div
          className={`inputAttribute w-20 p-2 text-sm bg-transparent border-2 border-lightGray rounded-3xl ${
            attribute.onlyone && " blur-[4px]"
          }`}
        >
          <m.input
            className={`bg-transparent inputPercent px-2  `}
            placeholder='Enter %'
            type='number'
            max={100}
            step={0.01}
            min={0}
            onChange={(e: any) => {
              const trueValue =
                e.target.value === "" ? null : e.target.value / 100;
              const check = checkWeightConfomityAttribute(
                trait,
                index,
                trueValue
              );
              if (!check) {
                setErrorState({
                  status: true,
                  message: "The total of all attributes must not exceed 100",
                });

                updateAtributeWeight({
                  attribute: { ...attribute, weight: trueValue },
                  trait: trait.id,
                });
              } else {
                updateAtributeWeight({
                  attribute: { ...attribute, weight: trueValue },
                  trait: trait.id,
                });

                if (e.target.value > 100) {
                  setErrorState({
                    status: true,
                    message: "The percent need to maximum 100%",
                  });
                }
              }
            }}
            value={displayWeight}
          />

          {displayWeight !== null && <m.div className='suffix'>%</m.div>}
        </m.div>
        <m.div
          className={`relative w-4/12 px-2 py-0 flex justify-center items-center ${
            attribute.onlyone && " blur-[2px]"
          }`}
        >
          <m.div className='relative w-full flex items-center h-10 py-2 rounded-xl border-2 border-lightGray overflow-hidden'>
            <input type="range"
                   value={displayWeight}
                   onChange={(e) => {
                     const { value } = e.target;
                     console.log(value);

                     updateAtributeWeight({
                       attribute: { ...attribute, weight: ((value as number) / 100.0) },
                       trait: trait.id,
                     });
                   }}
                   className="w-full h-1 w-230 bg-indigo-100 rounded-lg appearance-none cursor-pointer dark:bg-indigo-100" />
          </m.div>
        </m.div>

        <m.div className='w-4/12 flex'>
          <m.button
            onClick={(e) => {
              const values = {
                onlyone: !attribute.onlyone,
                weight: attribute.onlyone ? null : 0,
              };
              updateAtributeWeight({
                attribute: {
                  ...attribute,
                  onlyone: values.onlyone,
                  weight: values.weight,
                },
                trait: trait.id,
              });
            }}
            className={`w-16  mr-8 border-2 text-colorText border-secondaryColor text-sm rounded-full transition-all duration-300 
          hover:bg-secondaryColor hover:text-whiteText ${
            attribute.onlyone && "active"
          }`}
          >
            Only 1
          </m.button>

          <div
            className={`w-20 p-2 text-sm mr-2 bg-transparent text-center ${
              attribute.onlyone && " blur-[4px]"
            }`}
          >0</div>
        </m.div>
      </m.div>
    );
  }
);
