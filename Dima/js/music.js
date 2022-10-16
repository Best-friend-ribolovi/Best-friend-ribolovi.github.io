const music = [new Audio('../music/1.mp3'), new Audio('../music/2.mp3'), 
                new Audio('../music/3.mp3'), new Audio('../music/4.mp3'), 
                new Audio('../music/5.mp3'), new Audio('../music/6.mp3'), 
                new Audio('../music/7.mp3'), new Audio('../music/8.mp3')];
music.volume = 1;
let ch = 0;
document.querySelector('.hang-img').addEventListener('click', function(){
    music[ch].currentTime = 0;
    music[ch].play();
    ch++;
    if(ch>7){
        ch=0;
    }
})