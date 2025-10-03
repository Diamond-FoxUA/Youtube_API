import { getVideosByQuerry } from './js/YouTube-API';

const inputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-btn');

let currentQuery = '';

searchBtnEl.addEventListener('click', handleClick);

async function handleClick(event) {
  event.preventDefault();

  currentQuery = inputEl.value.trim();

  if (!currentQuery) {
    alert('Empty querry!');
    return;
  }

  const result = await getVideosByQuerry(currentQuery);
}



