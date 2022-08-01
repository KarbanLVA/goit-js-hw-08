import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(time) {      
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));    
    console.log(time);
};

populateTime();

function populateTime() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    const parsedCurrentTime = JSON.parse(currentTime);
    if (currentTime) {
        player.setCurrentTime(parsedCurrentTime.seconds);
    }     
};


