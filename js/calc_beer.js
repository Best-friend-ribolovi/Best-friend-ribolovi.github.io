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
                for(let i = persone.length-1; i >= 0; i--){
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
                if (personeNumber!=1){
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
    

    let radmir = document.querySelector('.calc__block_persone-radmir'),
        radmirText = document.querySelector('.calc__block_persone-individual.radmir.text'),
        maksimText = document.querySelector('.calc__block_persone-individual.maksim.text'),
        maksim = document.querySelector('.calc__block_persone-maksim');
    maksim.parentElement.addEventListener('click', ()=>{
        if(maksim.style.background == 'url("./icons/Maksim.svg") center center / cover'){
            maksim.style.background = "url('./icons/MaksimCheck.svg') center/cover";
            maksimText.innerHTML = 'Естественно Максим пьет';
        }
        else{ maksim.style.background = "url('./icons/Maksim.svg') center/cover";console.log(maksim.style.background);maksimText.innerHTML = 'Максим не пьет';}
    });
    radmir.parentElement.addEventListener('click', ()=>{
        if(radmir.style.background == 'url("./icons/Radmir.svg") center center / cover'){
            radmir.style.background = "url('./icons/RadmirCheck.svg') center/cover";
            radmirText.innerHTML = 'Радмир будет с нами пить и компания очень этому рада';
        }
        else{radmir.style.background = "url('./icons/Radmir.svg') center/cover";radmirText.innerHTML = 'Радмир не будет пить';}
    });
    
    let input__calc = document.querySelector('.input__calc'),
        input__calc_text = document.querySelector('.calc__beer_range .text');
        console.log(input__calc.value);
        input__calc.value = 0;
    input__calc.addEventListener('change', ()=>{
        if(input__calc.value == 0){input__calc_text.innerHTML = 'Выпить, чтобы культурно посидеть';}
        else{input__calc_text.innerHTML = 'Выпить, чтобы забыть о пустых ходок за рыбой';}
    });

    let calc__beer_btn = document.querySelector('.calc__beer_btn'),
        calc__beer_result = document.querySelector('.calc__beer_result');
    
    calc__beer_btn.addEventListener('click', ()=>{
        console.log(persone[0]);
        if(personeNumber == 0 && persone[0].style.background == ""){
            calc__beer_result.innerHTML = `Выберите параметры, товарищ! Не ломайте сайт!`
        }
        else{
            let litr = 'а';
            if(input__calc.value == 0){
                let point = ((personeNumber+1)*1.5);
                if(maksimText.textContent == "Естественно Максим пьет"){point += 2;}
                if(radmirText.textContent == "Радмир будет с нами пить и компания очень этому рада"){point += 1;}
                if(point>5){litr = 'ов';}else if(point==1){point = '';}
                calc__beer_result.innerHTML = `Вам нужно купить ${point} литр${litr} пива для приятного времяпровождения!`;
            }
            else{
                let point = ((personeNumber+1)*2.5);
                if(maksimText.textContent == "Естественно Максим пьет"){point += 3;}
                if(radmirText.textContent == "Радмир будет с нами пить и компания очень этому рада"){point += 2;}
                if(point>5){litr = 'ов';}else if(point==1){point = '';}
                calc__beer_result.innerHTML = `Вам нужно купить ${point} литр${litr} пива для того, чтобы забыть печаль!`;
            }
        }
    });
});