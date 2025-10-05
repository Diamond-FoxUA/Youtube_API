export function createVideoList(videoListEl, videos) {
  const markup = videos.map(({ 
    id: { videoId }, 
    snippet: { title, channelTitle, thumbnails: { medium: { url: thumbnail } } } }
  ) => `
    <li class="video-card">
      <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
        <img class="video-img" src="${thumbnail}" alt="${title}">
      </a>
        <h3 class="video-text">${truncateText(title, 30)}</h3>
        <p class="video-text">${channelTitle}</p>
    </li>
  `).join('');

  videoListEl.insertAdjacentHTML('beforeend', markup);
}

function truncateText(text, maxLength = 100){
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export function clearVideoList(listEl) {
  listEl.innerHTML = "";
}