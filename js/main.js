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
//Предзагрузка
jQuery.preloadImages = function()
 {
  for(var i = 0; i < arguments.length; i++)
  {
   jQuery("<img>").attr("src", arguments[ i ]);
  }
 };
$.preloadImages("../img/bg.webp", "../img/footer.webp", "../icons/PersoneCheck.svg", "../icons/MaksimCheck.svg", "../icons/RadmirCheck.svg", "../icons/Maksim.svg", "../icons/Radmir.svg", "../icons/DamirCheck.svg", "../icons/Damir.svg");