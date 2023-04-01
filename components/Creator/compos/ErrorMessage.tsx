import { FC, useEffect } from "react";
import {motion as m} from "framer-motion";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { errorMessageAnim } from "@/utils/animation";
import type { IError, IErrorState } from "@/store/slices/errorSlice";
import { setErrorState } from "@/store/slices/errorSlice";

interface IProps {
  error: IError;
  setErrorState: any;
}

const mapStateToProps = (state) => {
  return {
    error: state?.error?.errorState
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setErrorState
    },
    dispatch
  );
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)<FC<IProps>>(({error, setErrorState}) => {
    
    return(
        <m.div 
            variants={errorMessageAnim}
            initial="hidden"
            animate={error.status ? "show" : "hidden"}
            exit="exit"
            id="errorMessage" 
            className={`errorMessage fixed top-10 right-10 p-4 px-4 min-w-[500px] flex justify-between items-center rounded-xl text-sm large:hidden`}
        >
            <h2>{error?.message}</h2>
            <svg onClick={() => setErrorState({status: false, message: null})} className={`cursor-pointer`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#565773"/>
            </svg>
        </m.div>
    )
});