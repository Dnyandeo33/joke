const createEle = (eleName, idClassName, Text) => {
    const element = document.createElement(eleName);
    element.classList.add(idClassName);
    element.id = idClassName;
    element.innerText = Text;

    return element;
};

export default createEle;
