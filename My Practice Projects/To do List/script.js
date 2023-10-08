//Variables...

const plusBtn = document.querySelector(".plus-btn");
const inputField = document.querySelector('input');
const taskContainer = document.querySelector('.task-container');





//Event listener for adding a task to the browser...

plusBtn.addEventListener('click',function addTask(){
    let task = document.createElement('div');
    task.classList.add('task');
    
    let li = document.createElement('li');
    li.innerText = `${inputField.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputField.value === ""){
        alert("Please enter a task.");
    }
    else{
        taskContainer.appendChild(task);
    }

    inputField.value = "";

    checkButton.addEventListener('click',function(){

        li.style.textDecoration = "line-through"

    })

    deleteButton.addEventListener('click',function(e){
         let target = e.target;

         target.parentElement.remove()
        
    })


});





        
