let hamburger = document.querySelector('.icon-one'),
    menu = document.querySelector('.menu');
hamburger.addEventListener("click", ()=>{
    if(hamburger.classList.contains('active-one'))
    {
        hamburger.classList.remove('active-one');
        menu.classList.remove('active');    
    }
    else{
        hamburger.classList.add('active-one');
        menu.classList.add('active');
    }
});