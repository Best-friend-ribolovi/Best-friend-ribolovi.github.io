const music = [new Audio('../music/1.mp3'), new Audio('../music/2.mp3'), 
                new Audio('../music/3.mp3'), new Audio('../music/4.mp3'), 
                new Audio('../music/5.mp3'), new Audio('../music/6.mp3'), 
                new Audio('../music/7.mp3'), new Audio('../music/8.mp3')];
music.volume = 1;
let ch = 0;
document.querySelector('.hang-img-photos').addEventListener('click', function(e){
    target = e.target;
    console.log(target);
    let c = target.classList[1].replace('music','') - 1;
    console.log(c);
    music[c].currentTime = 0;
    music[c].play();
})