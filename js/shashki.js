window.addEventListener('DOMContentLoaded', function(){
    let blocks = document.querySelectorAll('.block'),
        map = document.querySelector('.map'),
        who = document.querySelector('#who');
    //Верстка
    blocks.forEach(i => {i.style.height = blocks[0].offsetWidth + "px";});
    
    //Игра
    let player = "white";
    map.addEventListener('click', (event)=>{                
        let target = event.target;
        console.log(target);
        if(target.classList.contains('green')){
            console.log('Новый ход');
            step(target, blocks, player);
            newPlayer();
        }
        else if(target.classList.contains('kill') || target.classList.contains('kill2')){
            kill(target, blocks, player);
            let win = whoLeft();
            if(win == 10){newPlayer();}
            else{
                document.querySelector('.winner-container').classList.add('active');
                document.querySelector('#who-win').innerHTML = player == 'white' ? 'белый' : 'черный';
            }
        }
        else{checkClick(player, target, blocks);}
    });
    function newPlayer(){
        player = player == 'white' ? 'black' : 'white';
        console.log(player);
        who.innerHTML = player == 'white' ? 'белый' : 'черный';
    }
});

function checkClick(player, blockPlay, blocksPlay){
    let n =0;//
    blocksPlay.forEach(i =>{
        n++;
        i.classList.remove('green');
        i.classList.remove('kill');
        i.classList.remove('kill2');
        if(i == blockPlay){
            console.log(n-1)
        }
    });
    if(blockPlay.classList[0] == player){
        let num=0, secNum=0;
        blocksPlay.forEach(i =>{
            num++;
            if(i == blockPlay.parentElement){
                console.log('Я нашел блок');
                secNum=num;
                console.log(secNum)
                blocksPlay[secNum-1].classList.add("green");
            }
        });
        if (player == 'white'){checkGreen(secNum, blocksPlay, 6, 8, player, 7, 9);}
        else{checkGreen(secNum, blocksPlay, -8, -10, player, -7, -9);}
    }
}
function checkGreen(secNum, blocksPlay, green1, green2, player, kill, kill2){//
    console.log("secNum = " + secNum);
    if(secNum%8 == 0){
        if(player=="black"){
            green1-=2
            if(blocksPlay[secNum+green2].hasChildNodes()){
                if(!blocksPlay[secNum+green2+kill2].hasChildNodes() && ((secNum-8%16)!=0)){
                    console.log("ПОНЕСЛАСЬ")
                    blocksPlay[secNum+green2+kill2].classList.add("kill2");
                }
            }
        }
        else{
            if(blocksPlay[secNum+green1].hasChildNodes()){
                if(!blocksPlay[secNum+green1+kill].hasChildNodes() && ((secNum != 2) && ((secNum-2)%16 != 0))){
                    blocksPlay[secNum+green1+kill].classList.add("kill");
                }
            }
        }
        if(!blocksPlay[secNum+green1].hasChildNodes()){blocksPlay[secNum+green1].classList.add("green");}
    }
    else if(secNum == 9 || secNum == 24 || secNum == 41 || secNum == 56){
        if(player=="black"){
            green2+=2;
            if(!blocksPlay[secNum+green1+kill].hasChildNodes()){
                blocksPlay[secNum+green1+kill].classList.add("kill");
            }
        }
        else{
            if(blocksPlay[secNum+green2].hasChildNodes()){
                if(!blocksPlay[secNum+green2+kill2].hasChildNodes()){
                    console.log("ПОНЕСЛАСЬ")
                    blocksPlay[secNum+green2+kill2].classList.add("kill2");
                }
            }
        }
        if(!blocksPlay[secNum+green2].hasChildNodes()){blocksPlay[secNum+green2].classList.add("green");}
    }
    else{
        if(!blocksPlay[secNum+green1].hasChildNodes()){blocksPlay[secNum+green1].classList.add("green");}
        else if(blocksPlay[secNum+green1].firstChild.classList!=player){
            if(player == 'white'){
                if(!blocksPlay[secNum+green1+kill].hasChildNodes() && ((secNum != 2) && ((secNum-2)%16 != 0))){
                    blocksPlay[secNum+green1+kill].classList.add("kill");
                }
            }
            else{
                if(!blocksPlay[secNum+green1+kill].hasChildNodes()){
                    blocksPlay[secNum+green1+kill].classList.add("kill");
                }
            }
        }
        if(!blocksPlay[secNum+green2].hasChildNodes()){blocksPlay[secNum+green2].classList.add("green");}
        else if(blocksPlay[secNum+green2].firstChild.classList!=player){
            if(player == 'white'){
                if(!blocksPlay[secNum+green2+kill2].hasChildNodes() && ((secNum != 15) && ((secNum-1)%15 != 0))){
                    console.log("ПОНЕСЛАСЬ")
                    blocksPlay[secNum+green2+kill2].classList.add("kill2");
                }
            }
            else{
                if(!blocksPlay[secNum+green2+kill2].hasChildNodes() && ((secNum-8%16)!=0)){
                    console.log("ПОНЕСЛАСЬ")
                    blocksPlay[secNum+green2+kill2].classList.add("kill2");
                }
            }
        }
    }
}
function step(block, blocks, player){
    let flag = 0;
    block.innerHTML+='<div class="'+ player +'"></div>';
    if(player == "white"){
        blocks.forEach(i=>{
            if(i.classList.contains("green") && flag == 0){i.innerHTML = '';flag++}
            i.classList.remove("green");
            i.classList.remove("kill");
            i.classList.remove("kill2");
        });
    }
    else{
        for(let i = 63; i>=0; i--){
            if(blocks[i].classList.contains("green") && flag == 0){blocks[i].innerHTML = '';flag++}
            blocks[i].classList.remove("green");
            blocks[i].classList.remove("kill");
            blocks[i].classList.remove("kill2");
        }
    }
}
function kill(block, blocks, player){
    let flag = 0;
    block.innerHTML+='<div class="'+ player +'"></div>';
    if(player == "white"){
        let n = 0;
        for(let i = 0; i<64; i++){
            if(blocks[i].classList.contains("green") && flag == 0){blocks[i].innerHTML = '';flag++;n=i;console.log("N="+n)}
            if((blocks[i].classList.contains("kill") || blocks[i].classList.contains("kill2")) && blocks[i] == block){
                if(blocks[i].classList.contains("kill")){n = 7;}
                else if(blocks[i].classList.contains("kill2")){n=9;}
                console.log('I = ' + i);
                blocks[i].innerHTML = '<div class="'+ player +'"></div>';
                blocks[i-n].innerHTML = '';
            }
            blocks[i].classList.remove("kill");
            blocks[i].classList.remove("kill2");
            blocks[i].classList.remove("green");
        }
    }
    else{
        for(let i = 63; i>=0; i--){
            if(blocks[i].classList.contains("green") && flag == 0){blocks[i].innerHTML = '';flag++;n=i;console.log("N="+n)}
            if((blocks[i].classList.contains("kill") || blocks[i].classList.contains("kill2")) && blocks[i] == block){
                if(blocks[i].classList.contains("kill")){n = 7;}
                else if(blocks[i].classList.contains("kill2")){n = 9;}
                console.log('I = ' + i);
                blocks[i].innerHTML = '<div class="'+ player +'"></div>';
                console.log("N = " + n, "I+N = " + Number(i+n));
                blocks[Number(i+n)].innerHTML = '';
            }
            blocks[i].classList.remove("kill");
            blocks[i].classList.remove("kill2");
            blocks[i].classList.remove("green");
        }
    }
}
function whoLeft(){
    let white = document.querySelectorAll('.white'),
        black = document.querySelectorAll('.black');
    console.log(white.length);
    console.log(black.length);
    if (white.length == 0){return 0;}
    else if (black.length == 0){return 1;}
    else{return 10;}
}