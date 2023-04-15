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
    1
  );

  const sentenceType =
    rule.type === "exclusion" ? "Cannot combine with" : "Combine with";

  return (
    <div className="border border-gray-300 rounded-xl flex flex-col p-6 space-y-4">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-xs text-colorText">{rule.trait}</h3>
          <h2 className="text-base text-colorText">{rule.attribute}</h2>
        </div>
        <div className="">
          <h3 className="text-xs text-colorText">Rule type</h3>
          <h2 className="text-base text-colorText">{sentenceType}</h2>
        </div>
        <div className="">
          <h3 className="text-xs text-colorText">
            {rule.others.map((e) => e.trait).join(" - ")}
          </h3>
          <h2 className="text-base text-colorText">
            {rule.others.map((e) => e.attribute).join(" - ")}
          </h2>
        </div>
      </div>
      <div className="flex justify-center space-x-4 py-2">
        {pngs[0]?.slice(0, 3).map((png, index) => (
          <div
            className=" w-28  h-28  bg-lightPurple rounded-xl  2xl:w-40 2xl:h-40 relative"
            style={{ overflow: "hidden" }}
          >
            <img
              src={process.env.NEXT_PUBLIC_S3_URL + png}
              className="superpose"
              style={{ zIndex: 10 + index }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <button
          className="
                    w-28 p-2 rounded-full text-sm bg-transparent border-2 border-secondaryColor text-colorText
                    transition-all duration-300 ease-in-out hover:bg-secondaryColor hover:text-whiteText
                "
        >
          Edit Rule
        </button>
        <button
          className="
                    w-28 p-2 rounded-full text-sm bg-secondaryColor text-whiteText border-2 border-secondaryColor
                    transition-all duration-300 ease-in-out hover:bg-transparent hover:text-secondaryColor
                "
        >
          Delete
        </button>
      </div>
    </div>
  );
});
