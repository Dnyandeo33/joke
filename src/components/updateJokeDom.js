/* eslint-disable no-param-reassign */

const updateJokeDom = (jokeDom, jokeData) => {
    // update category
    jokeDom.querySelector('.category').innerText = jokeData.category;

    // update type
    jokeDom.querySelector('.type').innerText = jokeData.type;

    // update part
    if (jokeData.type === 'twopart') {
        jokeDom.querySelector('.setup').innerText = jokeData.setup;
        jokeDom.querySelector('.delivery').innerText = jokeData.delivery;
    } else {
        jokeDom.querySelector('.setup').innerText = jokeData.joke;
        jokeDom.querySelector('.delivery').innerText = '-------';
    }

    // update flags
    const flags = jokeDom.querySelector('.flags');
    for (const flag in jokeData.flags) {
        const flagDom = flags.querySelector(`.${flag}`);
        flagDom.className = '';
        flagDom.classList.add(flag, jokeData.flags[flag]);
    }

    // update lang
    jokeDom.querySelector('.lang').innerText = `Language: ${jokeData.lang}`;

    // update safe
    jokeDom.querySelector('.safe').innerText = jokeData.safe;
};

export default updateJokeDom;
