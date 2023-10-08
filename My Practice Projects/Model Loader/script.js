//Variables..

const btn = document.querySelector('.model-btn');
const model = document.querySelector('.model');
const closeBtn = document.querySelector('.close-btn');
const container = document.querySelector('.model-container');
const body = document.querySelector('body');

//Event Listeners..


btn.addEventListener('click',function(){
    container.style.display = 'block';
});

closeBtn.addEventListener('click',function(){
    container.style.display = 'none'
});

window.addEventListener('click',function(e){
    if(e.target == body){
        container.style.display='none'
    }
})

