const inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
const rangeFrequency = document.querySelector('#rangeFrequencies');
let divPodcast = document.querySelector('.divPodcast');
let divAudio = document.querySelector('.audio');

window.addEventListener('load', () => {
  rangeFrequency.addEventListener('input', handleRangeValueChange);
});

const handleRangeValueChange = (event) => {
  const currentFrequency = event.target.value;
  inputCurrentFrequency.value = `${currentFrequency} Mhz`;

  findPodcastFrom(currentFrequency);
};

const findPodcastFrom = (frequency) => {
  let foundPodcast = null;

  for (let i = 0; i < realPodcasts.length; i++) {
    let currentPodcast = realPodcasts[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }

  if (!!foundPodcast) {
    renderPodcast(foundPodcast);
  } else {
    divPodcast.innerHTML = '<p class="notFound">Nenhum podcast encontrado!</p>';
    divAudio.innerHTML = '';
  }
};

const renderPodcast = (podcast) => {
  divPodcast.innerHTML = '';

  let img = document.createElement('img');
  img.src = './img/' + podcast.img;
  img.alt = './img/' + podcast.tile;
  img.title = './img/' + podcast.tile;
  img.classList.add('image');

  let title = document.createElement('p');
  title.textContent = podcast.title;
  title.classList.add('title');

  let description = document.createElement('p');
  description.textContent = podcast.description;
  description.classList.add('description');

  divPodcast.appendChild(img);
  divPodcast.appendChild(title);
  divPodcast.appendChild(description);

  divAudio.innerHTML = '';
  let audio = document.createElement('audio');
  audio.autoplay = 'autoplay';
  audio.controls = 'controls';
  audio.src = './audio/' + podcast.audio;
  audio.type = 'audio/mpeg';
  audio.classList.add('audio');

  divAudio.appendChild(audio);
};
