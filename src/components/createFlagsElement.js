import createElement from './createElement.js';

const createFlagElement = (flags) => {
    const element = document.createElement('ul');
    element.classList.add('flags');
    element.id = 'flags';

    for (const flag in flags) {
        const flagItemEle = createElement('li', flags[flag], flag);
        element.append(flagItemEle);
    }
    return element;
};

export default createFlagElement;
