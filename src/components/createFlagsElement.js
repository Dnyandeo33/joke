import createElement from './createElement.js';

/**
 * The function `createFlagElement` creates a list element containing flag items based on the input
 * flags object.
 *
 * @param flags - It looks like you are trying to create a function that generates a list of flags
 * based on the input `flags` object. Could you please provide an example of the `flags` object that
 * you would pass as a parameter to the `createFlagElement` function? This will help me assist you
 * further.
 * @returns The `createFlagElement` is returning an unordered list (`<ul>`) element with the
 * class `flags` and the id `flags`. it is creating list item elements (`<li>`) for
 * each flag in the `flags` object and appending them to the list.
 */
const createFlagElement = (flags) => {
    const element = document.createElement('ul');
    element.classList.add('flags');
    element.id = 'flags';

    for (const flag in flags) {
        const flagItemEle = document.createElement('li');
        flagItemEle.innerText = flag;
        flagItemEle.classList.add(flag, flags[flag]);
        element.append(flagItemEle);
    }
    return element;
};

export default createFlagElement;
