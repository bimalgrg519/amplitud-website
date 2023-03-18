import { useState, FC, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { traits_type } from "@/mockup/test";
import Traits from "./Traits";
import Link from "next/link";
import StepComponent from "@/components/Creator/compos/StepComponent";
// import { getFootballersData } from "@/store/actions/testActions";
import axios from "axios";
import Loader from "@/utils/Loader";

interface IProps {}

interface ITraitType {
  id: number;
  name: string;
}


const mapStateToProps = (state) => {
  return {
    testance: state?.footballers?.footballersData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {},
    dispatch
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)<FC<IProps>>(({}): any => {

  const [traitValidate, setTraitValidate] = useState(false);

  const traits: ITraitType[] = traits_type;

  
//   const footballersData = useSelector((state: any) => {
//     return state?.testReducer?.footballersData
//   });

//   const dispatch = useDispatch();

//   const fetchFootballers = async () => {
//     // await ApiClient.get("http://localhost:3000/api/hello").then((res) => {
//     //   console.log('res', res);
      
//     //     // dispatch(getFootballersData(res.data))
//     // })
//     await axios.get("http://localhost:3000/api/hello")
//     .then((res) => {
//         dispatch(getFootballersData(res.data))
//     })
//   }

// useEffect(() => {
//   fetchFootballers()
// },[])

  return (
    <div id="artwork" className="flex flex-col justify-center items-center w-3/4 mt-10 ">

      <StepComponent stepNb={3} />

      <div className="mt-10 w-full">
        <h1 className="title font-gilroy-bold text-darkText text-4xl">How rare is each trait and attribute in your collection ?</h1>
        <div className="flex flex-col mt-10 w-full">
          <div className="flex justify-start items-center w-full px-10 mb-10 text-colorText font-gilroy-bold">
            <h3 className="w-1/3 text-left">Trait types</h3>
            <h3 className="w-2/3 text-left">Likelihood of appearing</h3>
          </div>

          {
            traits.map((trait) => (
              <Traits key={trait.id} trait_name={trait.name} />
            ))
          }

        </div>
      </div>
      <div className="w-full flex justify-between items-center pt-10">
        <div className=" w-72  h-20 flex justify-between items-center ">
          <Link className=" 
                        p-3 flex justify-center items-center border-2 border-secondaryColor text-colorText text-sm w-32 rounded-full cursor-pointer z-10
                    " href="/" >
            <svg className=" mx-2 scale-75" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L8.41 1.41L3.83 6H20V8H3.83L8.42 12.59L7 14L0 7L7 0Z" fill="#565773" />
            </svg>
            <h3>Upload</h3>
          </Link>
          <Link className=" 
                        p-3 flex justify-center items-center border-2 border-secondaryColor text-colorText text-sm w-32 rounded-full cursor-pointer z-10
                        transition-all duration-200 ease-in-out
                    " href="/" >
            <svg className=" path mx-2 scale-75" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#565773" />
            </svg>
            <h3>Layer order</h3>
          </Link>
        </div>
        <div className=" h-20 flex justify-center items-center  ">
          <Link className="bg-secondaryColor text-whiteText p-3 flex justify-center items-center border-2 border-secondaryColor text-sm w-32 rounded-full cursor-pointer z-10 " href="/Artwork/step4" >
            <h3>Next step</h3>
            <svg className=" mx-2 scale-75 rotate-180" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L8.41 1.41L3.83 6H20V8H3.83L8.42 12.59L7 14L0 7L7 0Z" fill="#ffffff" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
});