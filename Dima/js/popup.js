let giftBlocks = document.querySelector('.gift-blocks'),
    giftBlockAll = document.querySelectorAll('.gift-block'),
    popupImg = document.querySelector('.popup_img'),
    popupTitle = document.querySelector('.popup__body_content-title'),
    popupText = document.querySelector('.popup__body_content-text'),
    popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup__body_close'),
    popupBtn = document.querySelector('.popup__body_content-button'),
    popupForm = document.querySelector('#popup-form');
    giftBlocks.addEventListener('click', (e)=>{
        target = e.target;
        console.log(target);
        document.querySelectorAll('.link-button.gift-what_button').forEach(btn =>{
            if(target == btn){
                console.log(target.parentElement.childNodes[3].childNodes[1].src);//img
                popupImg.innerHTML = `<img src="${target.parentElement.childNodes[3].childNodes[1].src}">`;
                let titlePopup = target.parentElement.childNodes[3].childNodes[3].childNodes[1].textContent;//заголовок
                console.log(titlePopup);
                if(titlePopup == "ВЫСТУПЛЕНИЕНА МЕРОПРИЯТИИ"){
                    console.log(titlePopup);
                    popupTitle.innerHTML = 'ВЫСТУПЛЕНИЕНА МЕРОПРИЯТИИ';
                    popupText.innerHTML = 'Если Вы хотите украсить Ваше мероприятие, приветственный коктейль' +
                    'или открытие выставки, то ханг – великолепное решение для таких' +
                    'задач. Также музыка ханга является идеальным дополнением для'+
                    'медитативной практики, чайной церемонии или занятия йогой.';
                }
                else if(titlePopup == "ЗАПИСЬ КОМПОЗИЦИИ,ОТДЕЛЬНОЙ ПАРТИИ"){
                    console.log(titlePopup);
                    popupTitle.innerHTML = 'ЗАПИСЬ КОМПОЗИЦИИ, ОТДЕЛЬНОЙ ПАРТИИ';
                    popupText.innerHTML = 'Если Вам необходима композиция с хангом в качестве фоновой музыки' +
                    'для видео или если Вы хотите интегрировать данный инструмент в свою песню или бит, я могу' +
                    'записать её для Вас!';
                }
                else if(titlePopup == "МАСТЕР-КЛАСС"){
                    console.log(titlePopup);
                    popupTitle.innerHTML = 'МАСТЕР-КЛАСС';
                    popupText.innerHTML = 'Если Вы хотите сами изучить данный инструмент или Вам просто' +
                    'интересно попробовать извлечь из него звук, я могу провести личный мастер-класс, по' +
                    'итогам которого Вы сможете сыграть свою первую композицию на ханге! Также возможно' + 
                    'продолжение занятий до полного освоения инструмента.';
                }
                document.body.style.overflow = "hidden";
                popup.classList.add('display-flex');
                setTimeout(() => {
                    popup.classList.add('active');
                }, 50);
            }
        })
    });
    popupClose.addEventListener('click', ()=>{
        closePupup();
    });
    document.querySelector('.popup').addEventListener('click', (e)=>{
        target = e.target;
        console.log(target);
        if(target.classList.contains('popup')){
            closePupup();
        }
    });
    function closePupup(){
        document.body.style.overflow = "";
        popup.classList.remove('active');
        setTimeout(() => {
            popup.classList.remove('display-flex');
        }, 1000);
        setTimeout(() => {
            if(popupBtn.classList.contains('apply-form')){
                popupBtn.classList.remove('apply-form');
            }
            if(popupBtn.classList.contains('nonactive')){
                popupBtn.classList.remove('nonactive');
            }
            popupBtn.innerHTML = 'Связаться';
            if(popupForm.classList.contains('active')){
                popupForm.classList.remove('display-flex');
                popupForm.classList.remove('active');
                popupBtn.classList.remove('apply-form');
            }
        }, 500);
    }

    popupBtn.addEventListener('click', ()=>{
        if(popupBtn.classList.contains('apply-form')){
            let popupName = document.querySelector('.popup-name').value,
                popupTel = document.querySelector('.popup-tel').value,
                popupTg = document.querySelector('.popup-tg').value,
                popupNewTitle = document.querySelector('.popup__body_content-title').textContent;
            console.log(popupName, popupTel, popupTg, popupNewTitle);
            console.log('Отправили!');
            const request = new XMLHttpRequest();
            const url = "../php/main.php";
            const params = JSON.stringify({ "name": popupName, "title": popupNewTitle, "tel": popupTel, "tg": popupTg });
            console.log(params);
            request.open("POST", url, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.addEventListener("readystatechange", () => {
                if(request.readyState === 4 && request.status === 200) {       
                    console.log(request.responseText);
                    popupBtn.classList.add('nonactive');
                    popupText.innerHTML = 'Спасибо за заявку! Скоро я с Вами свяжусь и мы обсудим, как я могу Вам помочь!';
                    popupForm.classList.remove('active');
                    setTimeout(() => {
                        popupForm.classList.remove('display-flex');
                    }, 600);
                }
                else{
                    popupText.innerHTML = 'Ой...<br>Что-то пошло не так. Пока что Вы можете мне позвонить по номеру <a href="tel:89990666177">+79990666177</a>, а я буду решать проблему с сайтом!';
                }
            });
            request.send(params);
            console.log('ЗДЕСЬ МЫ ДОЛЖНЫ ПОЛУЧИТЬ ДАННЫЕ');
            console.log('ЗДЕСЬ МЫ ДОЛЖНЫ ПОЛУЧИТЬ ДАННЫЕ');
        }
        else{
            console.log('Я живооой');
            popupBtn.innerHTML = 'Отправить';
            popupBtn.classList.add('apply-form');
            popupForm.classList.add('display-flex');
            setTimeout(() => {
                popupForm.classList.add('active');
            }, 50);
        }
    })
