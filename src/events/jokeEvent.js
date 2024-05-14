import dom from '../dom.js';
import jokeHandler from '../handlers/jokeHandler.js';

const jokeEvent = () => {
    dom.btn.addEventListener('click', jokeHandler);
};

export default jokeEvent;
