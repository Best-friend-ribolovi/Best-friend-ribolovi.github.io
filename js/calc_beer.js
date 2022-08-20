window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let persone = document.querySelectorAll('.calc__block_persone'),
        persones = document.querySelector('.calc__block_persones');
    console.log(persone);
    console.log(persones);
        let personeNumber = 0;
        persones.addEventListener('mouseover', (event)=>{
            let target = event.target;
            console.log(target);
            if (target && target.classList.contains('calc__block_persone')){
                for(let i = 0; i < persone.length; i++){
                    persone[i].style.background = "url('./icons/PersoneCheck.svg') center/cover";
                    if (target == persone[i]){
                        console.log(persone[i]);
                        break;
                    }
                }
                for(let i = persone.length-1; i > 0; i--){
                    let j = i+1;
                    console.log("Блок убывания:");
                    console.log(persone[i]);
                    if (i == persone.length-1){}
                    else{persone[i+1].style.background = "url('./icons/Persone.svg') center/cover";}
                    if (target == persone[i]){ break;}
                }
            }
        });
        persones.addEventListener('click', (event)=>{
            let target = event.target;
                if (target && target.classList.contains('calc__block_persone')){
                    for(let i = 0; i < persone.length; i++){
                        if (target == persone[i]){
                            personeNumber=i;
                            console.log(`personeNumber = ${personeNumber}`)
                            break;
                        }
                    }
                }
        });
        persones.addEventListener('mouseout', (event)=>{
            let target = event.target;
            console.log(target);         
            if (target && target.classList.contains('calc__block_persone')){
                if (personeNumber!=0){
                    for(let i = persone.length-1; i > personeNumber; i--){
                        persone[i].style.background = "url('./icons/Persone.svg') center/cover";
                    }
                }
                else{
                    for(let i = 0; i < persone.length; i++){
                        if (personeNumber==0){
                            persone[i].style.background = "url('./icons/Persone.svg') center/cover";
                        }
                    }
                }
            }
        });
    
    
});