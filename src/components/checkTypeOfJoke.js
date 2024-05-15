import createElement from './createElement.js';

/**
 * The function `checkTypeOfJoke` checks the type.
 *
 * @param jokeData - `checkTypeOfJoke` function is designed to handle different types
 * The function checks the `type` property of the `jokeData`.
 * @returns An array containing two paragraph elements if the jokeData type
 * is 'twopart', otherwise a single paragraph element (jokeEle) is being returned.
 */
const checkTypeOfJoke = (jokeData) => {
    if (jokeData.type === 'twopart') {
        const setupEle = createElement('p', 'setup', jokeData.setup);
        const deliveryEle = createElement('p', 'delivery', jokeData.delivery);
        return [setupEle, deliveryEle];
    }
    const jokeEle = createElement('p', 'setup', jokeData.joke);
    return jokeEle;
};

export default checkTypeOfJoke;
