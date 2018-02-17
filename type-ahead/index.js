

const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(api)
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    .catch(e => console.error(e));


const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        //g means global, i means insensitive
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
};

const displayMatches = e => {
    const matchArray = findMatches(e.target.value, cities);
    suggestions.innerHTML = matchArray.map(place => {
        return `<li>
            <span>${place.city}, ${place.state}</span>
            <span>${place.population}</span>
        </li>`
    }).join('');
};


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
