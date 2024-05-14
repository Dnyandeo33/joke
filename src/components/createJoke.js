import checkTypeOfJoke from './checkTypeOfJoke.js';
import createElement from './createElement.js';
import createFlagElement from './createFlagsElement.js';

const createJoke = (jokeData) => {
    const {
        category, type, flags, lang, safe,
    } = jokeData;

    // joke container
    const jokeContainer = document.createElement('div');
    jokeContainer.classList.add('joke');
    jokeContainer.id = 'joke-container';

    // category & type element
    const categoryEle = createElement('h2', 'category', category);
    const typeEle = createElement('p', 'type', type);

    // append category & type element to jokeContainer
    jokeContainer.append(categoryEle, typeEle);

    // check type
    const elementType = checkTypeOfJoke(jokeData);
    if (Array.isArray(elementType)) {
        const [setupEle, deliveryEle] = elementType;
        jokeContainer.append(setupEle, deliveryEle);
    } else {
        jokeContainer.append(elementType);
    }

    // flag element
    const flagsEle = createFlagElement(flags);

    const langEle = createElement('p', 'lang', lang);
    const safeEle = createElement('p', 'safe', safe);

    if (safe) {
        jokeContainer.style.backgroundColor = '#042112';
    }

    // append flags lang and safe element to jokeContainer
    jokeContainer.append(flagsEle, langEle, safeEle);

    return jokeContainer;
};

export default createJoke;
