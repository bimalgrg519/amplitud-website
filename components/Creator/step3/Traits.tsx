import { useState, FC, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AttributeType from "./AttributeType";
import { motion as m } from "framer-motion";
import { updateTraitWeight } from "@/store/slices/traitSlice";
import type { ITraitDetail } from "@/store/slices/traitSlice";
import { setErrorState } from "@/store/slices/errorSlice";
import {
  getPercents,
  isActivePercent,
  checkGlobalConfomityAttribute,
  convertConformityDecimal,
} from "@/utils/tools";

interface IProps {
  detail: ITraitDetail;
  updateTraitWeight: any;
  setErrorState: any;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTraitWeight,
      setErrorState,
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)<FC<IProps>>(({ detail, updateTraitWeight, setErrorState }) => {
  //if trait is validate, add check svg
  const [traitValidate, setTraitValidate] = useState(false);
  //value to check click on open button for each trait
  const [open, setOpen] = useState(false);
  // //input value to update input when user click on edge
  // const [inputValue, setInputValue] = useState<number>(null);

  const displayWeight =
    detail.weight !== null
      ? convertConformityDecimal(detail.weight * 100)
      : null;

  const checkGlob = checkGlobalConfomityAttribute(detail);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="my-2 flex justify-between items-center w-full">
        <div className="p-2 bg-lightGrayCube relative rounded-xl w-48 min-w-[170px] text-center flex items-center justify-around mx-2">
          {traitValidate ? (
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00039 11.2001L1.80039 7.0001L0.400391 8.4001L6.00039 14.0001L18.0004 2.0001L16.6004 0.600098L6.00039 11.2001Z"
                fill="#6442FF"
              />
            </svg>
          ) : (
            ""
          )}

          <h3 className={`text-colorText font-gilroy-bold`}>
            {checkGlob && (
              <svg
                className="absolute left-5 transition-all duration-200 ease-in-out opacity-1 -translate-x-0"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ top: 13 }}
              >
                <path
                  d="M6.00039 11.2001L1.80039 7.0001L0.400391 8.4001L6.00039 14.0001L18.0004 2.0001L16.6004 0.600098L6.00039 11.2001Z"
                  fill="#6442FF"
                ></path>
              </svg>
            )}{" "}
            {detail.id}
          </h3>
        </div>
        <div className="flex w-80  p-2 mx-2 border-2 border-inputColor rounded-2xl">
          {Array(10)
            .fill(0)
            .map((_, i) => {
              const id = i + 1;
              const isActive = isActivePercent(id, displayWeight);
              return (
                <div
                  onClick={(e) => {
                    getPercents(e);
                    updateTraitWeight({ ...detail, weight: id / 10 });
                  }}
                  id={`${id}`}
                  key={`traitPercent_${i + 1}`}
                  className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn ${
                    isActive && "active"
                  }`}
                ></div>
              );
            })}
        </div>

        <div
          className={`inputTrait border-2 border-lightGray bg-transparent rounded-3xl mx-2 w-34 p-2 pl-4`}
        >
          <input
            onChange={(e: any) => {
              const value = e.target.value === "" ? null : e.target.value / 100;
              updateTraitWeight({ ...detail, weight: value });
              if (e.target.value > 100) {
                setErrorState({
                  status: true,
                  message: "The percent need to maximum 100%",
                });
              }
            }}
            value={displayWeight}
            className={`bg-transparent inputPercent`}
            placeholder="Enter %"
            type="number"
            max={100}
            step={0.01}
            min={0}
          />
          {displayWeight !== null && <div className="suffix">%</div>}
        </div>

        <div
          onClick={() => {
            console.log("first");
            setOpen(!open);
            if (!checkGlob) {
              setErrorState({
                status: true,
                message:
                  "Warning the configuration of your attributes is not correct",
              });
            }
          }}
          className={`z-50 w-14 h-14 min-h-[56px] min-w-[56px] rounded-full border-2 border-secondaryColor flex items-center justify-center cursor-pointer  ${
            open ? "bg-secondaryColor" : " bg-transparent"
          }
            transition-all duration-300 ease-in-out
            mx-2`}
        >
          <svg
            className={`transition-all duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }  hover:rotate-180`}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={` ${
                open ? "fill-whiteText" : "fill-colorText"
              } transition-all duration-300 ease-in-out hover:fill-secondaryColor`}
              d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z"
            />
          </svg>
        </div>
      </div>

      <div
        className={`w-full pl-10 flex flex-col justify-start items-start ${
          open ? "visible" : "hidden"
        }`}
      >
        <h2 className="font-gilroy-bold text-xl my-4">Attribute types</h2>
        <table className="w-full mb-8 mt-2">
          <thead className="flex w-full">
            <tr className="flex w-full">
              <th className="text-gray-500 text-left p-4 w-1/6">Image</th>
              <th className="text-gray-500 text-left p-4 w-1/6">Attribute</th>
              <th className="text-gray-500 text-left p-4 pb-4 w-3/6">
                Likelihood of appearing
              </th>
              <th className="text-gray-500 text-center p-4 w-1/6">
                No. of NFTs
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col overflow-y-scroll w-full max-h-80">
            {detail?.attributes.map((attribute, index) => (
              <tr key={`attribute_${index}`} className="flex w-full">
                <AttributeType
                  traitType={detail.id}
                  attribute={attribute}
                  trait={detail}
                  index={index}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
