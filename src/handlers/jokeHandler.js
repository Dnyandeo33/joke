import fetchJoke from '../../api/fetchJoke.js';
import createJoke from '../components/createJoke.js';
import updateJokeDom from '../components/updateJokeDom.js';
import dom from '../dom.js';

/**
 * The `jokeHandler` function fetches a joke asynchronously, creates a DOM element for the joke, and
 * appends it to the root element in the DOM.
 */
const jokeHandler = async () => {
    const jokeData = await fetchJoke();
    const existJokeContainer = document.getElementById('joke-container');
    if (existJokeContainer) {
        updateJokeDom(existJokeContainer, jokeData);
    } else {
        const jokeDom = createJoke(jokeData);
        dom.root.append(jokeDom);
    }
};

export default jokeHandler;
