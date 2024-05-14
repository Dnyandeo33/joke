const fetchJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    return data;
};

export default fetchJoke;
