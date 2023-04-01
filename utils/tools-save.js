
export const getPercents = (e) => {
    console.log(e.target.id);
    let nb = e.target.id;
    const element = e.target;
    const list = element.parentElement;
    const elements =  list.children;

    for (let i = 1; i <= elements.length; i++) {
        if (i <= nb) {
            elements[i-1].classList.add("active");
        } else{
            elements[i-1].classList.remove("active");
        }
    }
}

export const liClickToggle = (e) => {
    console.log("click", e)
    const li = e.target;
    const ul = li.parentElement;
    const lis = ul.children;
    console.log(lis.length)
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("active");
    }
    li.classList.add("active");
}

export const singleElementClickTrait = (e, traitName, setTraitLeft, traitLeft , parentSelected, setParentSelected, attributeLeft) => {
  const element = e.target;


  if(traitName === traitLeft){
    setTraitLeft("");
  }else{
    setTraitLeft(traitName);
  }
  console.log(traitName)

  const parentElement = element.parentElement;
  const buttons = parentElement.children;

  if (element.classList.contains("active")) {
    element.classList.remove("active");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  } else {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
      buttons[i].disabled = true;
    }
    element.classList.add("active");
    element.disabled = false;
  }
};
export const singleElementClickAttributeLeft = (e, traitName, setTraitLeft, traitLeft, setAttributeLeft, attributeLeft, setParentSelected, parentSelected, parent) => {
  const element = e.target;

  try {
    if(parentSelected === ""){
      setParentSelected(parent)
    }else {
      setParentSelected("")
      setTraitLeft("")
    }
  } catch (error) {
    
  }

  try {
    if(traitName === attributeLeft){
      setAttributeLeft("");
    }else{
      setAttributeLeft(traitName);
    }
  } catch (error) {
    
  }


  // console.log("attribute", traitName)

  const parentElement = element.parentElement;
  const buttons = parentElement.children;

  if (element.classList.contains("active")) {
    element.classList.remove("active");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  } else {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
      buttons[i].disabled = true;
    }
    element.classList.add("active");
    element.disabled = false;
  }
};

//update square color with input value




//active class function

export const removeActiveClass = (e) => {
    const element = e.target;
    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } 
}

export const addActiveClass = (e) => {
    const element = e.target;
    if (!element.classList.contains("active")) {
        element.classList.add("active");
    } 
}


// functions for trait rarity & attributes



//trait rarity functions

// utils/getPercents.js
export const getPercentsTrait = (e, setInputValue, setInputValueInt) => {
    let nb = e.target.id;
    let percentageValue = `${nb * 10}%`;
    setInputValue(percentageValue);
  
    const numStr = percentageValue.replace("%", "");
    const num = parseInt(numStr);
    setInputValueInt(num);
  
    const element = e.target;
    const list = element.parentElement;
    const elements = list.children;
  
    if (nb === "1" && element.classList.contains("active")) {
      e.target.classList.remove("active");
      setInputValue("");
      setInputValueInt(0);
      for (let i = 1; i <= elements.length; i++) {
        elements[i - 1].classList.remove("active");
      }
    } else {
      for (let i = 1; i <= elements.length; i++) {
        if (i <= nb) {
          elements[i - 1].classList.add("active");
        } else if (i > nb) {
          elements[i - 1].classList.remove("active");
        }
      }
    }
  };
  

export const updateSquareColor = (num, nb, traitName) => {
    const element = document.querySelector(`#Container_${traitName}`);
    const childrens = element.children;
    nb = num / 10;
    const roundedNb = Math.round(nb);

    for (let i = 1; i <= 10; i++) {
        if (i <= roundedNb) {
            childrens[i-1].classList.add("active");
        } else{
            childrens[i-1].classList.remove("active");
        }
    }
}

export const handleInputChangeTrait = (e, setInputValue, setInputValueInt, traitName) => {
    const inputValue = e.target.value;
    let percentageValue = "";
    let nb = 0;
    let num = 0;
  
    if (inputValue.length > 0) {
      percentageValue = inputValue.replace(/%/g, "") + "%";
    } else {
      percentageValue = inputValue;
    }
  
    const numStr = percentageValue.replace("%", "");
    if (/[^0-9%]/.test(numStr)) {
      percentageValue = "";
      updateSquareColor(num, nb, traitName);
    } else {
      num = parseInt(numStr);
  
      if (num > 100) {
        percentageValue = "100%";
      } else if (num < 0) {
        percentageValue = "0%";
      }
  
      if (num <= 100 && num >= 0) {
        //adapt square color with input value
      } else if (num > 100) {
        percentageValue = "100%";
        num = 100;
      } else if (num < 0) {
        percentageValue = "0%";
        num = 0;
      }
      setInputValueInt(num);
      updateSquareColor(num, nb, traitName);

    }
  
    setInputValue(percentageValue);
  };
  


//trait rarity's attributes functions 

export const updateCircleColor = (num, nb, traitName, attributeName) => {
    
    const element = document.querySelector(`#Attributes_${traitName}_${attributeName}`);
    // console.log(element)
    const circles = element.getElementsByClassName(`likelihoodRounded`);
    // console.log(circles)

    nb = num / 10;
    const roundedNb = Math.round(nb);

    for (let i = 1; i <= 10; i++) {
        if (i <= roundedNb) {
            circles[i-1].classList.add("active");
        } else{
            circles[i-1].classList.remove("active");
        }
    }
}

export const singleElementClickAttribute = (e, setIsOnly, isOnly, setInputValue, setPlaceholderValue, handleClick) => {
    const element = e.target;
    setIsOnly(!isOnly)
    setInputValue("");
    setPlaceholderValue("Enter %");
    handleClick();

    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else{
        element.classList.add("active");
    }

}

// utils/handleInputChange.js
export const handleInputChange = (e, setInputValue, setInputValueInt, traitName, attributeName) => {
  const inputValue = e.target.value;
  let percentageValue = "";
  let nb = 0;
  let num = 0;

  if (inputValue.length > 0) {
    percentageValue = inputValue.replace(/%/g, "") + "%";
  } else {
    percentageValue = inputValue;
  }

  const numStr = percentageValue.replace("%", "");
  if (/[^0-9%]/.test(numStr)) {
    percentageValue = "";
    updateCircleColor(num, nb, traitName, attributeName);
  } else {
    num = parseInt(numStr);

    if (num > 100) {
      percentageValue = "100%";
    } else if (num < 0) {
      percentageValue = "0%";
    }

    if (num <= 100 && num >= 0) {
      //adapt square color with input value
    } else if (num > 100) {
      percentageValue = "100%";
      num = 100;
    } else if (num < 0) {
      percentageValue = "0%";
      num = 0;
    }
    setInputValueInt(num);
    updateCircleColor(num, nb, traitName, attributeName);
  }

  setInputValue(percentageValue);
};


export const getPercentsAttribute = (e, setInputValue, setInputValueInt, traitName, attributeName) => {
    let nb = e.target.id;
    let percentageValue = `${nb * 10}%`;
    setInputValue(percentageValue);
  
    const numStr = percentageValue.replace("%", "");
    const num = parseInt(numStr);
    setInputValueInt(num);
  
    const eventElement = e.target;
    const element = document.querySelector(`#Attributes_${traitName}_${attributeName}`);
    const circles = element.getElementsByClassName(`likelihoodRounded`);
  
    if (nb === "1" && eventElement.classList.contains("active")) {
      e.target.classList.remove("active");
      setInputValue("");
      setInputValueInt(0);
      for (let i = 1; i <= circles.length; i++) {
        circles[i - 1].classList.remove("active");
      }
    } else {
      for (let i = 1; i <= circles.length; i++) {
        if (i <= nb) {
          circles[i - 1].classList.add("active");
        } else if (i > nb) {
          circles[i - 1].classList.remove("active");
        }
      }
    }
  };
  