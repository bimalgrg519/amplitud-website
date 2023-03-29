import type {
  IFullTrait,
  ITraitDetail,
  TType,
  TMangeTypeOfRule,
  ITraitAttribute,
  ICombinaisons,
} from "@/store/slices/traitSlice";

export const getPercents = (e: any): void => {
  let nb = e.target.id;
  const element = e.target;
  const list = element.parentElement;
  const elements = list.children;

  for (let i = 1; i <= elements.length; i++) {
    if (i <= nb) {
      elements[i - 1].classList.add("active");
    } else {
      elements[i - 1].classList.remove("active");
    }
  }
};

export const liClickToggle = (e): void => {
  const li = e.target;
  const ul = li.parentElement;
  const lis = ul.children;
  for (let i = 0; i < lis.length; i++) {
    lis[i].classList.remove("active");
  }
  li.classList.add("active");
};

export const singleElementClick = (e): void => {
  const element = e.target;

  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
};

/**
 * Check if the New rule is conform or not
 * @param combinations
 * @returns
 */
export const checkConfomity = (combinations: ICombinaisons): boolean => {
  let isConform = true;

  if (combinations === null) isConform = false;
  if (combinations?.main?.attribute === null) isConform = false;
  if (combinations?.main?.trait === null) isConform = false;
  if (combinations?.type === null) isConform = false;
  if (combinations?.rules.length === 0) isConform = false;

  return isConform;
};

export const checkAddSubRule = (combinations: ICombinaisons): boolean => {
  let isConform = true;

  if (combinations === null) isConform = false;
  if (combinations?.main?.attribute === null) isConform = false;
  if (combinations?.main?.trait === null) isConform = false;
  if (combinations?.type === null) isConform = false;
  if (combinations?.tmp.trait === null) isConform = false;
  if (combinations?.tmp.attribute === null) isConform = false;

  return isConform;
};

/**
 * Construct the schema Rule
 * @param data
 * @param type
 * @param el
 * @returns
 */
export const manageRuleSchema = (
  data: ICombinaisons,
  type: TMangeTypeOfRule,
  el: any
) => {
  switch (type) {
    case "main-trait":
      return {
        ...data,
        main: { ...data.main, trait: (<ITraitDetail>el).id },
      };
    case "main-attribute":
      return {
        ...data,
        main: { ...data.main, attribute: (<ITraitAttribute>el).id },
      };
    case "type":
      return { ...data, type: <TType>el };
    case "sub-trait":
      return {
        ...data,
        tmp: { ...data.tmp, trait: (<ITraitDetail>el).id },
      };
    case "sub-attribute":
      return {
        ...data,
        tmp: { ...data.tmp, attribute: (<ITraitAttribute>el).id },
      };
  }
};

export const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
