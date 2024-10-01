const buttonElement = document.getElementById('colorButton');
const divElement = document.getElementById('div');

buttonElement.addEventListener('click', function(){
    if(divElement.className == 'aqua'){
        divElement.className = 'green';
        divElement.textContent = "Бургер кинг БОЖЕСТВЕННО!!!";
    
    }
    else{
        divElement.className = 'aqua';
        divElement.textContent = "Бургер кинг ГОВНО!!!";    
    }
})