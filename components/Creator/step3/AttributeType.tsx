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

enum TraitTypes {
  EYE_COLOR = "Eye color",
}

interface IProps {
  attribute: ITraitAttribute;
  trait: ITraitDetail;
  updateAtributeWeight: any;
  setErrorState: any;
  index: number;
  traitType?: string;
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
  ({
    attribute,
    trait,
    updateAtributeWeight,
    setErrorState,
    index,
    traitType,
  }) => {
    // const [inputValue, setInputValue] = useState("Enter %");

    const displayWeight =
      attribute.weight !== null && !attribute.onlyone
        ? convertConformityDecimal(attribute.weight * 100)
        : null;

    return (
      <>
        <m.td className="p-4 w-1/6">
          <img
            className="w-16 h-16 bg-lightPurple rounded-xl"
            style={{ overflow: "hidden" }}
            src={process.env.NEXT_PUBLIC_S3_URL + attribute.file}
          />
        </m.td>
        <m.td className="p-4 w-1/6 flex items-center">
          <h1 className="font-bold text-lg">{attribute.id}</h1>
        </m.td>
        <m.td className={`p-4 w-3/6 flex items-center space-x-4`}>
          <div
            className={`inputAttribute p-2 text-sm mr-2 bg-transparent border-2 border-lightGray rounded-3xl ${
              attribute.onlyone && " blur-[2px]"
            }`}
          >
            <input
              className={`bg-transparent inputPercent w-24`}
              placeholder="Enter %"
              type="number"
              max={100}
              step={0.01}
              min={0}
              disabled={attribute.onlyone}
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
              value={displayWeight === null ? 0 : displayWeight}
            />
            {displayWeight !== null && <div className="suffix">%</div>}
          </div>
          <div
            className={`w-56 pt-1 pb-2 rounded-xl border border-gray-300 ${
              attribute.onlyone && " blur-[2px]"
            }`}
          >
            <input
              id="minmax-range"
              type="range"
              min="0"
              max="10"
              step={0.1}
              disabled={attribute.onlyone}
              value={attribute.weight * 10}
              className="h-[2px] w-full bg-gray-300 rounded-lg appearance-none cursor-pointer"
              onChange={(e: any) => {
                const trueValue = e.target.value / 10;
                console.log(e.target.value);
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
                } else {
                  getPercents(e);
                  updateAtributeWeight({
                    attribute: { ...attribute, weight: trueValue },
                    trait: trait.id,
                  });
                }
              }}
            />
          </div>
          <button
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
            className={`w-24 p-2 border-2 text-colorText border-secondaryColor text-sm rounded-full transition-all duration-300 
          hover:bg-secondaryColor hover:text-whiteText ${
            attribute.onlyone && "active"
          }`}
          >
            Only 1
          </button>
        </m.td>
        <m.td className="p-4 w-1/6 flex items-center justify-center">
          <input
            className={`w-20 p-2 text-sm bg-transparent border-2 border-lightGray rounded-3xl`}
            placeholder="0"
            type="text"
            disabled
          />
        </m.td>
      </>
    );
  }
);
