console.log("Welcome to spotify");
//Intitialize the variables
let songIndex=0;
let audioElement =  new Audio('song/11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "song/2.mp3", coverPath:"cover/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "song/3.mp3", coverPath:"cover/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "song/4.mp3", coverPath:"cover/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "song/5.mp3", coverPath:"cover/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "song/6.mp3", coverPath:"cover/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "song/7.mp3", coverPath:"cover/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "song/8.mp3", coverPath:"cover/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "song/9.mp3", coverPath:"cover/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "song/10.mp3", coverPath:"cover/10.jpg"},
    {songName: "Arjan Vailly", filePath: "song/11.mp3", coverPath:"cover/11.JPG"},

]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})
//Experiment
/* Array.from(document.getElementsByClassName('songItemPlay')).forEach ((element)=>{
    element.addEventListener('click', (e)=>{
       // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        (songIndex+1).addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        (songIndex+1).classList.remove('fa-play-circle')
        (songIndex+1).classList.add('fa-pause-circle')
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        (songIndex+1).classList.remove('fa-pause-circle')
        (songIndex+1).classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
}) */


//Listem to Event
audioElement.addEventListener("timeupdate",()=>{
    //console.log('timeupdate');
    //seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach ((element)=>{
    element.addEventListener('click', (e)=>{
       // console.log(e.target);
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})