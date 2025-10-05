import getVideosByQuerry from './js/YouTube-API';
import { createVideoList, clearVideoList } from './js/render-functions.js';
import { changeLayout, changeBtnCondition, showError } from './js/ux-ui';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-btn');
const videoListEl = document.querySelector('.video-list');

const containerEl = document.querySelectorAll('.container');

let currentQuery = '';
let page = 1;
let totalHits = 0;

formEl.addEventListener('submit', handleClick);

async function handleClick(event) {
  event.preventDefault();
  changeBtnCondition(searchBtnEl);

  currentQuery = inputEl.value.trim();

  if (!currentQuery) {
    showError('Please fill out the search field.');
    return;
  }

  page = 1;
  clearVideoList(videoListEl);

  try {
    changeLayout(containerEl);
    const videos = await getVideosByQuerry(currentQuery, page);
    console.log(videos);

    createVideoList(videoListEl, videos.items);
  } catch (error) {
    alert('Opps... Something went wrong. Try again later.');
    console.log(error);
  } finally {
    changeBtnCondition(searchBtnEl);
  }

}



