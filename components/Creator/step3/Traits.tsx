
import { useState, FC, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AttributeType from "./AttributeType";
import { motion as m } from 'framer-motion'
import { updateTraitWeight } from "@/store/slices/traitSlice";
import type { ITraitDetail } from "@/store/slices/traitSlice";
import { setErrorState } from "@/store/slices/errorSlice";
import { getPercents, isActivePercent, checkGlobalConfomityAttribute } from "@/utils/tools";

interface IProps {
  detail: ITraitDetail;
  updateTraitWeight: any;
  setErrorState: any;
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTraitWeight,
      setErrorState
    },
    dispatch
  );
};



export default connect(
  null,
  mapDispatchToProps
)<FC<IProps>>(({detail, updateTraitWeight, setErrorState}) => {
  //if trait is validate, add check svg
  const [traitValidate, setTraitValidate] = useState(false);
  //value to check click on open button for each trait
  const [open, setOpen] = useState(false);
  // //input value to update input when user click on edge
  // const [inputValue, setInputValue] = useState<number>(null);

  const displayWeight = detail.weight !== null ? detail.weight * 100 : null;


  const checkGlob = checkGlobalConfomityAttribute(detail);


  return (
    <m.div
      layout
      className="flex flex-col justify-center items-center w-full"
    >
      <m.div layout className="my-2 flex justify-between items-center w-full">
        <m.div layout className="p-2 bg-lightGrayCube relative rounded-xl w-48 min-w-[170px] text-center flex items-center justify-around mx-2">
          {traitValidate ? (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00039 11.2001L1.80039 7.0001L0.400391 8.4001L6.00039 14.0001L18.0004 2.0001L16.6004 0.600098L6.00039 11.2001Z" fill="#6442FF" />
            </svg>
          ) : ""}

          <h3 className={`text-colorText font-gilroy-bold ${!checkGlob ? 'text-error' : 'text-success'}`}>{detail.id}</h3>
        </m.div>
        <m.div layout className="flex w-80  p-2 mx-1 border-2 border-inputColor rounded-2xl">

          {Array(10).fill(0).map((_, i) => {
            const id = i+1;
            const isActive = isActivePercent(id, displayWeight);
            return <m.div onClick={(e) => {
              getPercents(e);
              updateTraitWeight({...detail, weight: id/10});
            }} id={`${id}`} key={`traitPercent_${i+1}`} className={`w-6 h-6 rounded-md mx-1 bg-lightGrayCube cursor-pointer transition-all duration-200 hover:bg-secondaryColor  likelihoodeBtn ${isActive && 'active'}`}></m.div>
          })}
        </m.div>


        <m.input onChange={(e: any) => {
          updateTraitWeight({...detail, weight: e.target.value/100})
          if(e.target.value > 100){
            setErrorState({
              status: true,
              message: "The percent need to maximum 100%"
            })
          }

      }} value={displayWeight} className={` border-2 border-lightGray bg-transparent rounded-3xl mx-2 w-34 p-2 pl-4 border-lightGray`} placeholder="Enter %" type="number" max={100}/>

        <m.div
          layout
          onClick={() => {
            setOpen(!open);
            if(!checkGlob){
              setErrorState({
                status: true,
                message: "Warning the configuration of your attributes is not correct"
              })
            }
          }}
          className={`
                        w-14 h-14 rounded-full border-2 border-secondaryColor flex items-center justify-center cursor-pointer  ${open ? "bg-secondaryColor" : " bg-transparent"}
                        transition-all duration-300 ease-in-out
                    `}>
          <svg className={`transition-all duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}  hover:rotate-180`} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={` ${open ? "fill-whiteText" : "fill-colorText"} transition-all duration-300 ease-in-out hover:fill-secondaryColor`} d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" />
          </svg>
        </m.div>
      </m.div>

      <m.div
        layout
        className={`  w-full px-10 flex flex-col justify-start items-start ${open ? "h-auto opacity-1" : "h-0 opacity-0"}`}
      >
        <m.h2 layout className="font-gilroy-bold text-xl mb-8">Attribute types</m.h2>
        <m.div layout className="flex w-full justify-start mb-8">
          <m.h3 className="w-1/12">Image</m.h3>
          <m.h3 className="w-3/12 text-center ">Attribute</m.h3>
          <m.h3 className="w-4/12 text-center">Likelihood of appearing</m.h3>
          <m.h3 className="w-4/12 text-end px-2">No. of NFTs</m.h3>
        </m.div>

        <m.div layout className="w-full h-80 flex flex-col overflow-y-scroll">
          {
            detail?.attributes.map((attribute, index) => (
              <AttributeType key={`attribute_${index}`} attribute={attribute} trait={detail} index={index}/>
            ))
          }

        </m.div>
      </m.div>
    </m.div>
  );

});