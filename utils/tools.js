
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

export const singleElementClick = (e) => {
    const element = e.target;

    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else{
        element.classList.add("active");
    }

}