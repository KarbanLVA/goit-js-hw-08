import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
// console.log(player);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(time) {    
    const changeTime = time.seconds;
    localStorage.setItem('videoplayer-current-time', changeTime);  
    console.log(changeTime);
};

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);   

player.setCurrentTime(currentTime).then(function (seconds) {});

