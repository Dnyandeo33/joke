import fetchJoke from '../../api/fetchJoke.js';
import createJoke from '../components/createJoke.js';
import dom from '../dom.js';

const jokeHandler = async () => {
    const jokeData = await fetchJoke();
    const jokeDom = createJoke(jokeData);
    dom.root.innerHTML = '';
    dom.root.append(jokeDom);
};

export default jokeHandler;
