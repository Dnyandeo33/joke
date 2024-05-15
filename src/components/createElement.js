/**
 * The function `createEle` creates a new HTML element with specified element name, class name, and
 * text content.
 *
 * @param eleName - The `eleName` parameter in the `createEle` function represents the type of HTML
 * element you want to create, such as "div", "p", "span", etc.
 * @param idClassName - `createEle` function is used to specify both
 * the class and id attributes of the created element.
 * @param Text - The `Text` parameter in the `createEle` function represents the text.
 * This text will be displayed inside the element when it is
 * rendered on the webpage.
 * @returns The function `createEle` is returning a newly created HTML element with the specified
 * element name, class name, and text content.
 */

const createEle = (eleName, idClassName, text) => {
    const element = document.createElement(eleName);
    element.classList.add(idClassName);
    element.id = idClassName;
    element.innerText = text;

    return element;
};

export default createEle;
