import { FC, useState } from "react";
import { connect } from "react-redux";
import { liClickToggle } from "@/utils/tools";
import StepComponent from "@/components/Creator/compos/StepComponent";
import type {
  IFullTrait,
  ITraitDetail,
} from "@/store/slices/traitSlice";

interface IProps {
  traits: IFullTrait;
}

const mapStateToProps = (state) => {
  return {
    traits: state?.trait?.traitState,
  };
};

const classNameTrait: string = `flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
transition-all duration-200 ease-in-out
hover:bg-secondaryColor hover:text-whiteText`;

export default connect(
  mapStateToProps,
  null
)<FC<IProps>>(({ traits }) => {


  const [selectedTraitCombine, setSelectedTraitCombine] = useState<ITraitDetail>(null);
  const [selectedTraitExclude, setSelectedTraitExclude] = useState<ITraitDetail>(null);

  const clickTraitCombine = (event: React.MouseEvent<any>, trait: ITraitDetail) => setSelectedTraitCombine(trait);
  const clickTraitExclude = (event: React.MouseEvent<any>, trait: ITraitDetail) => setSelectedTraitExclude(trait);

  return (
    <div className='w-full pt-10 flex flex-col justify-start items-start '>
      <StepComponent stepNb={4} />
      <h1 className=' mt-5 font-GilroyHeavy text-4xl'>
        Apply combinations and exclusions on your collection
      </h1>
      <h3 className=' mt-5 text-colorText text-xl'>Create a new rule</h3>

      <div className=' min-h-[50vh] py-16  w-full flex justify-around items-center'>
        <div className=' h-[450px] rounded-xl border-2 border-inputColor flex '>
          <div className='p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll'>
            {traits?.traits_and_attributes.map((trait) => (
              <div
                onClick={(event) => {
                  clickTraitCombine(event, trait);
                }}
                key={trait.id}
                className={`${classNameTrait} ${
                  trait.id === selectedTraitCombine?.id && "selectTrait"
                }`}
              >
                <h3>{trait.id}</h3>
              </div>
            ))}
          </div>

          {selectedTraitCombine !== null && (
            <div className='p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted'>
              {selectedTraitCombine.attributes.map((attribute, index) => (
                <div
                  onClick={liClickToggle}
                  key={`attribute_${index}`}
                  className=' 
                      flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
                      transition-all duration-200 ease-in-out
                      hover:bg-secondaryColor hover:text-whiteText
                  '
                >
                  <h3>{attribute.id}</h3>
                </div>
              ))}
            </div>
          )}

          {selectedTraitCombine === null && (
            <div className='p-2 px-4 h-full flex flex-col justify-center items-center text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted'>
              <span style={{maxWidth: 160, textAlign: "center"}}>Please select a Trait to Combine</span>
            </div>
          )}
        </div>
        <div className='w-96   flex flex-col justify-center items-center'>
          <h2 className='text-sm text-colorText'>Select Type Of Rule</h2>
          <div className='w-full flex justify-around mt-2'>
            <button className='p-5 bg-greenButton text-sm rounded-xl text-colorText '>
              Must Combine with
            </button>
            <button className='p-5 bg-yellowButton text-sm rounded-xl text-colorText '>
              Must Exclude with
            </button>
          </div>

          <div className=' w-full flex flex-col justify-center items-center text-sm mt-10'>
            <h3 className='text-colorText mb-4'>Preview</h3>
            <div className='flex justify-between items-center w-full p-2 border-inputColor border-2 rounded-xl'>
              <div className=' h-28 w-28 rounded-xl bg-lightGrayCube' />
              <div className=' h-28 w-28 rounded-xl bg-lightGrayCube' />
              <div className=' h-28 w-28 rounded-xl bg-lightGrayCube' />
            </div>
          </div>
        </div>

        <div className=' h-[450px] rounded-xl border-2 border-inputColor flex '>
          <div className='p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll'>

          {traits?.traits_and_attributes.map((trait) => (
              <div
                onClick={(event) => {
                  clickTraitExclude(event, trait);
                }}
                key={trait.id}
                className={`${classNameTrait} ${
                  trait.id === selectedTraitExclude?.id && "selectTrait"
                }`}
              >
                <h3>{trait.id}</h3>
              </div>
            ))}
          </div>

          {selectedTraitExclude !== null && (
            <div className='p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted'>
              {selectedTraitExclude.attributes.map((attribute, index) => (
                <div
                  onClick={liClickToggle}
                  key={`attribute_${index}`}
                  className=' 
                      flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
                      transition-all duration-200 ease-in-out
                      hover:bg-secondaryColor hover:text-whiteText
                  '
                >
                  <h3>{attribute.id}</h3>
                </div>
              ))}
            </div>
          )}

          {selectedTraitExclude === null && (
            <div className='p-2 px-4 h-full flex flex-col justify-center items-center text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted'>
              <span style={{maxWidth: 160, textAlign: "center"}}>Please select a Trait to Exclude</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
});
