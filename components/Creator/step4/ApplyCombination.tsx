import { FC, useState } from "react";
import { connect } from "react-redux";
import { cloneObj, checkConfomity, manageRuleSchema, checkAddSubRule } from "@/utils/tools";
import StepComponent from "@/components/Creator/compos/StepComponent";
import type {
  IFullTrait,
  ITraitDetail,
  TType,
  TMangeTypeOfRule,
  ITraitAttribute,
  ICombinaisons,
} from "@/store/slices/traitSlice";

interface IProps {
  traits: IFullTrait;
}

const mapStateToProps = (state) => {
  return {
    traits: state?.trait?.traitState,
  };
};

const model: ICombinaisons = {
  main: {
    trait: null,
    attribute: null,
  },
  type: null,
  rules: [],
  tmp: {
    trait: null,
    attribute: null
  }
};

const classNameTrait: string = `flex justify-start items-center w-40 min-h-[50px] p-1 px-5 my-1.5 rounded-xl bg-lightGrayCube cursor-pointer
transition-all duration-200 ease-in-out
hover:bg-secondaryColor hover:text-whiteText`;

export default connect(
  mapStateToProps,
  null
)<FC<IProps>>(({ traits }) => {
  const [selectedTraitCombine, setSelectedTraitCombine] =
    useState<ITraitDetail>(null);
  const [selectedSubTrait, setSelectedSubTrait] =
    useState<ITraitDetail>(null);
  const [combinations, setCombinaisons] = useState<ICombinaisons>(null);
  const [createNewOne, setCreateNewOne] = useState<boolean>(false);

  const clickTraitCombine = (
    event: React.MouseEvent<any>,
    trait: ITraitDetail
  ) => setSelectedTraitCombine(trait);

  const clickSubTrait = (
    event: React.MouseEvent<any>,
    trait: ITraitDetail
  ) => setSelectedSubTrait(trait);

  const manageRule = (
    event: React.MouseEvent<any>,
    elem: any,
    type:TMangeTypeOfRule
  ): void => {
    const data = combinations == null ? model : combinations;
    setCombinaisons(manageRuleSchema(data, type, elem));
  };

  const addNewRule = (event: React.MouseEvent<any>) => {
    const cbm: ICombinaisons = cloneObj({...combinations });
    cbm.rules.push(combinations.tmp);
    cbm.tmp.trait = null;
    cbm.tmp.attribute = null;
    setCombinaisons({...cbm})
  }
 
  return (
    <div className='w-full pt-10 flex flex-col justify-start items-start '>
      <StepComponent stepNb={4} />
      <h1 className=' mt-5 font-GilroyHeavy text-4xl'>
        Apply combinations and exclusions on your collection
      </h1>
      {/* <h3 className=' mt-5 text-colorText text-xl'>Create a new rule</h3> */}

      <div className='h-[100px] py-16 w-full flex justify-around items-center'>
        {!createNewOne && (
          <button
            className={`${
              createNewOne
                ? "w-40 p-2 rounded-full text-sm bg-secondaryColor text-whiteText border-2 border-secondaryColor transition-all duration-300 ease-in-out hover:bg-transparent hover:text-secondaryColor"
                : " w-40 p-2 rounded-full text-sm bg-transparent border-2 border-secondaryColor text-colorText transition-all duration-300 ease-in-out hover:bg-secondaryColor hover:text-whiteText"
            }`}
            onClick={() => setCreateNewOne(true)}
          >
            Create a new rule
          </button>
        )}

        {createNewOne && (
          <button
            className=' w-40 p-2 rounded-full text-sm bg-transparent border-2 border-secondaryColor text-colorText transition-all duration-300 ease-in-out hover:bg-secondaryColor hover:text-whiteText'
            onClick={() => setCreateNewOne(false)}
          >
            Cancel
          </button>
        )}
      </div>
      {createNewOne && (
        <div className=' min-h-[50vh] py-16  w-full flex justify-around items-center'>
          <div className=' h-[450px] rounded-xl border-2 border-inputColor flex '>
            <div className='p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll'>
              {traits?.traits_and_attributes.map((trait,index) => (
                <div
                  onClick={(event) => {
                    manageRule(event, trait, "main-trait");
                    clickTraitCombine(event, trait);
                  }}
                  key={`attribute_${index}`}
                  className={`${classNameTrait} ${
                    trait.id === combinations?.main?.trait && "selectTrait"
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
                    onClick={(event) => {
                      manageRule(event, attribute, "main-attribute");
                    }}
                    key={`attribute_${index}`}
                    className={`${classNameTrait} ${
                      attribute.id === combinations?.main?.attribute &&
                      "selectTrait"
                    }`}
                  >
                    <h3>{attribute.id}</h3>
                  </div>
                ))}
              </div>
            )}

            {selectedTraitCombine === null && (
              <div className='p-2 px-4 h-full flex flex-col justify-center items-center text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted'>
                <span style={{ maxWidth: 160, textAlign: "center" }}>
                  Please select a Trait to Combine
                </span>
              </div>
            )}
          </div>
          <div className='w-96   flex flex-col justify-center items-center'>
            <h2 className='text-sm text-colorText'>Select Type Of Rule</h2>
            <div className='w-full flex justify-around mt-2'>
              <button
                onClick={(event) => {
                  manageRule(event, "combination", "type");
                }}
                className={`p-5 bg-greenButton text-sm rounded-xl text-colorText  ${
                  combinations?.type === "combination" && "active"
                }`}
              >
                Must Combine with
              </button>
              <button
                onClick={(event) => {
                  manageRule(event, "exclusion", "type");
                }}
                className={`p-5 bg-yellowButton text-sm rounded-xl text-colorText  ${
                  combinations?.type === "exclusion" && "active"
                }`}
              >
                Must Exclude with
              </button>
            </div>

            {checkConfomity(combinations) && (
              <div className=' w-full flex flex-col justify-center items-center text-sm mt-10'>
                <h3 className='text-colorText mb-4'>Preview</h3>
                <h3 className="text-xs text-lightGray">{combinations.main.trait}</h3>
                <h2 className="text-sm text-colorText">{combinations.main.attribute}</h2>
                <div className='flex justify-between items-center w-full p-2 border-inputColor border-2 rounded-xl'>
                  <div className=' h-28 w-28 rounded-xl bg-lightGrayCube' />
                  <div className=' h-28 w-28 rounded-xl bg-lightGrayCube' />
                  <div className=' h-28 w-28 rounded-xl bg-lightGrayCube' />
                </div>
                <ol>
                  {combinations.rules.map((e,index) => {
                    console.log('eeeee', e);
                    
                    return <li key={`list_${index}`}>{e.trait} - {e.attribute}</li>
                  })}
                </ol>
              </div>
            )}

            {combinations !== null && !checkConfomity(combinations) && (
              <div className=' w-full flex flex-col justify-center items-center text-sm mt-10'>
                <h3 className='text-colorText mb-4' style={{ color: "red" }}>
                  Rule Improper
                </h3>
              </div>
            )}

          </div>

          <div className=' h-[450px] rounded-xl border-2 border-inputColor flex relative'>
            {checkAddSubRule(combinations) && <button
              className='absolute w-auto p-2 rounded-full text-sm bg-transparent border-2 border-secondaryColor text-colorText transition-all duration-300 ease-in-out bg-white hover:bg-secondaryColor hover:text-whiteText'
              style={{ top: -16, right: -14 }}
              onClick={(event) => addNewRule(event)}
            >
              +
            </button>}
            

            <div className='p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll'>
              {traits?.traits_and_attributes.map((trait, index) => (
                <div
                  onClick={(event) => {
                    manageRule(event, trait, "sub-trait");
                    clickSubTrait(event, trait);
                  }}
                  key={`sub_attribute_${index}`}
                  className={`${classNameTrait} ${
                    trait.id ===  combinations?.tmp?.trait && "selectTrait"
                  }`}
                >
                  <h3>{trait.id}</h3>
                </div>
              ))}
            </div>

            {selectedSubTrait !== null && (
              <div className='p-2 px-4 h-full flex flex-col justify-start items-start text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted'>
                {selectedSubTrait.attributes.map((attribute, index) => (
                  <div
                  onClick={(event) => {
                    manageRule(event, attribute, "sub-attribute");
                  }}
                    key={`sub_attribute_${index}`}
                    className={`${classNameTrait} ${
                      attribute.id === combinations?.tmp?.attribute &&
                      "selectTrait"
                    }`}
                  >
                    <h3>{attribute.id}</h3>
                  </div>
                ))}
              </div>
            )}

            {selectedSubTrait === null && (
              <div className='p-2 px-4 h-full flex flex-col justify-center items-center text-colorText overflow-y-scroll ml-1 border-l-2 border-secondaryColor border-dotted'>
                <span style={{ maxWidth: 160, textAlign: "center" }}>
                  Please select a Sub Trait
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});
