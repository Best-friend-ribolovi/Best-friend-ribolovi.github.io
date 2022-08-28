window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let persone = document.querySelectorAll('.calc__block_persone'),
        persones = document.querySelector('.calc__block_persones');
        let personeNumber = 0, flag = 0;
        persones.addEventListener('mouseover', (event)=>{
            let target = event.target;
            if (target && target.classList.contains('calc__block_persone')){
                for(let i = 0; i < persone.length; i++){
                    persone[i].style.background = "url('./icons/PersoneCheck.svg') center/cover";
                    if (target == persone[i]){
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
                            if(personeNumber == i){
                                if(personeNumber == 0 && flag == 0){
                                    persone[0].style.background = "url('./icons/PersoneCheck.svg') center/cover";
                                    flag = 1;
                                }
                                else{
                                    for(let j = 0; j < persone.length; j++){
                                        personeNumber=0;flag = 0;
                                        persone[j].style.background = "url('./icons/Persone.svg') center/cover";
                                    }
                                }  
                            }
                            else{
                                personeNumber=i;flag = 1;break;
                            }
                            if (i==0 && personeNumber == 0 && flag == 1){
                                persone[0].style.background = "url('./icons/PersoneCheck.svg') center/cover";
                            }
                        }
                    }
                }
        });
        persones.addEventListener('mouseout', (event)=>{
            let target = event.target;
            if (target && target.classList.contains('calc__block_persone')){
                for(let i = 0; i <= personeNumber; i++){
                    persone[i].style.background = "url('./icons/PersoneCheck.svg') center/cover";
                    if(flag == 1 && i==0 && personeNumber == 0){
                        persone[0].style.background = "url('./icons/PersoneCheck.svg') center/cover";
                    }
                }
                for(let i = persone.length-1; i > personeNumber; i--){
                    persone[i].style.background = "url('./icons/Persone.svg') center/cover";
                    if(personeNumber == 0 && flag == 0){
                        persone[0].style.background = "url('./icons/Persone.svg') center/cover";
                    }
                }
            }
        });
    let radmir = document.querySelector('.calc__block_persone-radmir'),
        radmirText = document.querySelector('.calc__block_persone-individual.radmir.text'),
        maksimText = document.querySelector('.calc__block_persone-individual.maksim.text'),
        maksim = document.querySelector('.calc__block_persone-maksim'),
        damirText = document.querySelector('.calc__block_persone-individual.damir.text'),
        damir = document.querySelector('.calc__block_persone-damir');
    maksim.parentElement.addEventListener('click', ()=>{
        if(maksim.style.background == 'url("./icons/Maksim.svg") center center / cover'){maksim.style.background = "url('./icons/MaksimCheck.svg') center/cover";maksimText.innerHTML = 'Естественно Максим пьет';}
        else{ maksim.style.background = "url('./icons/Maksim.svg') center/cover";console.log(maksim.style.background);maksimText.innerHTML = 'Максим не пьет';}
    });
    radmir.parentElement.addEventListener('click', ()=>{
        if(radmir.style.background == 'url("./icons/Radmir.svg") center center / cover'){radmir.style.background = "url('./icons/RadmirCheck.svg') center/cover";radmirText.innerHTML = 'Радмир будет с нами пить и компания очень этому рада';}
        else{radmir.style.background = "url('./icons/Radmir.svg') center/cover";radmirText.innerHTML = 'Радмир не будет пить';}
    });
    damir.parentElement.addEventListener('click', ()=>{
        if(damir.style.background == 'url("./icons/Damir.svg") center center / cover'){damir.style.background = "url('./icons/DamirCheck.svg') center/cover";damirText.innerHTML = 'Дамир никогда не пьет!!!';}
        else{ damir.style.background = "url('./icons/Damir.svg') center/cover";console.log(damir.style.background);damirText.innerHTML = 'Больше не трогай. Дамир пить не будет!';}
    });
    let input__calc = document.querySelector('.input__calc'),
        input__calc_text = document.querySelector('.calc__beer_range .text');
        input__calc.value = 0;
    input__calc.addEventListener('change', ()=>{
        if(input__calc.value == 0){input__calc_text.innerHTML = 'Выпить, чтобы культурно посидеть';}
        else if(input__calc.value == 1){input__calc_text.innerHTML = 'Выпить, чтобы забыть о пустых ходок за рыбой';}
        else if(input__calc.value == 2){input__calc_text.innerHTML = 'Выпить на рыбалке';}
        else if(input__calc.value == 3){input__calc_text.innerHTML = 'Выпить на природе';}
        else if(input__calc.value == 4){input__calc_text.innerHTML = 'Выпить на природе, рыбача';}
    });
    let calc__beer_btn = document.querySelector('.calc__beer_btn'),
        calc__beer_result = document.querySelector('.calc__beer_result');
    calc__beer_btn.addEventListener('click', ()=>{
        console.log(persone[0]);
        if((persone[0].style.background != 'url("./icons/PersoneCheck.svg") center center / cover') && maksimText.textContent != "Естественно Максим пьет" && radmirText.textContent != "Радмир будет с нами пить и компания очень этому рада"){
            calc__beer_result.innerHTML = `Выберите параметры, товарищ! Не ломайте сайт!`
        }
        else{
            if(input__calc.value == 0){
                final(persone, 1.5, 2, 0.5, 0);
                snack(persone,1, 1, 1, 0);
            }
            else if(input__calc.value == 1){
                final(persone, 2.5, 3, 1, 1);
                snack(persone,1, 1, 1, 1);
            }
            else if(input__calc.value == 2){
                final(persone, 2.5, 3, 1, 1);
                snack(persone,1, 1, 1, 2);
            }
            else if(input__calc.value == 3){
                final(persone, 2.5, 3, 1, 1);
                snack(persone,1, 1, 1, 3);
            }
            else if(input__calc.value == 4){
                final(persone, 2.5, 3, 1, 1);
                snack(persone,1, 1, 1, 4);
            }
        }
    });
    function final(persone,personeChislo, maksim, radmir, check){
        let point = 0;
        let litr = 'а';
        if(persone[0].style.background != 'url("./icons/PersoneCheck.svg") center center / cover'){point = 0;}
        else{point = ((personeNumber+1)*personeChislo);}
        if(maksimText.textContent == "Естественно Максим пьет"){point += maksim;}
        if(radmirText.textContent == "Радмир будет с нами пить и компания очень этому рада"){point += radmir;}
        if(point>5){litr = 'ов';}else if(point==1){litr = '';}
        if(check == 0){
            calc__beer_result.innerHTML = `Вам нужно купить ${point} литр${litr} пива для того, чтобы приятно посидеть! Примерный процент в пиве ≈ 5`;
        }
        else{
            calc__beer_result.innerHTML = `Вам нужно купить ${point} литр${litr} пива для того, чтобы забыть печаль! Примерный процент в пиве ≈ 5`;
        }
    }
    function snack(persone,personeChislo, maksim, radmir, check){
        let point = 0;
        let litr = 'а';
        if(persone[0].style.background != 'url("./icons/PersoneCheck.svg") center center / cover'){point = 0;}
        else{point = ((personeNumber+1)*personeChislo);}
        if(maksimText.textContent == "Естественно Максим пьет"){point += maksim;}
        if(radmirText.textContent == "Радмир будет с нами пить и компания очень этому рада"){point += radmir;}
        if(point>5){litr = 'ов';}else if(point==1){litr = '';}
        if(check == 0){
            calc__beer_result.innerHTML += `<div>Вам нужно купить снеки</div>`;
        }
        else if(check == 1){
            calc__beer_result.innerHTML += `<div>Вам нужно купить снеки и сосиски</div>`;
        }
        else if(check == 2){
            calc__beer_result.innerHTML += `<div>Вам нужно купить снеки, сосиски, и МИАСО</div>`;
        }
        else if(check == 3){
            calc__beer_result.innerHTML += `<div>Вам нужно купить снеки, сосиски, и МИАСО</div>`;
        }
        else if(check == 4){
            calc__beer_result.innerHTML += `<div>Вам нужно купить снеки, сосиски, и МИАСО</div>`;
        }
    }
});