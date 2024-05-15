/**
 * The fetchJoke function asynchronously fetches a random joke from the JokeAPI and returns the data.
 *
 * @returns The `fetchJoke` function is returning the data fetched from the
 * 'https://v2.jokeapi.dev/joke/Any' endpoint after converting it to JSON format.
 */
const fetchJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    return data;
};

export default fetchJoke;
