import createElement from './createElement.js';

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
