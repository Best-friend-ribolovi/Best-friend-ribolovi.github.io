let giftBlocks = document.querySelector('.gift-blocks'),
    giftBlockAll = document.querySelectorAll('.gift-block'),
    popupImg = document.querySelector('.popup_img'),
    popupTitle = document.querySelector('.popup__body_content-title'),
    popupText = document.querySelector('.popup__body_content-text'),
    popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup__body_close');

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
        console.log('Закрываем Епта')
    }
let popupBtn = document.querySelector('.popup__body_content-button'),
    popupForm = document.querySelector('#popup-form');
    popupBtn.addEventListener('click', ()=>{
        console.log('Я живооой');
            popupForm.classList.add('display-flex');
            setTimeout(() => {
                popupForm.classList.add('active');
            }, 50);
    })