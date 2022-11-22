let toggle = document.querySelector('.toggle-checkbox'),
    body = document.body;
    toggle.addEventListener('click', ()=>{
        if(body.classList.contains('light-theme')){
            body.classList.remove('light-theme');
        }else{
            body.classList.add('light-theme');
        }
    })