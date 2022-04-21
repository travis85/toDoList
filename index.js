
window.addEventListener('load', () =>{
    const form =  document.querySelector("#task_form")
    const input = document.querySelector("#task_Input")
    const listEl = document.querySelector("#task")
    const database = firebase.database()

    form.addEventListener('submit' ,(e) =>{
        e.preventDefault()

        const task = input.value;
        
        database.ref(task);

        if (!task){
            alert('Please fill out task')
            return;
        } 
        const taskEle = document.createElement('div')
        taskEle.classList.add('task')

        const taskContentEl = document.createElement('div')
        taskContentEl.classList.add('content')
        // taskContentEl.innerText = task

        taskEle.appendChild(taskContentEl)

        const taskInput = document.createElement('input')
        taskInput.classList.add('text')
        taskInput.type = 'text'
        taskInput.value = task
        taskInput.setAttribute('readonly','readonly')

        listEl.appendChild(taskEle)


        taskContentEl.appendChild(taskInput)

        const taskClicks = document.createElement('div')
        taskClicks.classList.add('click')

        const taskEdit = document.createElement('button')
        taskEdit.classList.add('edit')
        taskEdit.innerHTML = 'edit'

        const taskDelete = document.createElement('button')
        taskDelete.classList.add('delete')
        taskDelete.innerHTML = 'delete'

        taskClicks.appendChild(taskEdit)
        taskClicks.appendChild(taskDelete)

        taskEle.appendChild(taskClicks)
        listEl.appendChild(taskEle)

        input.value = ''

        taskEdit.addEventListener('click', ()=>{
            if(taskEdit.innerText.toLowerCase() == 'edit'){
                taskInput.removeAttribute('readonly')
                taskInput.focus()
                taskInput.innerText = "SAVE"
    
            } else{
                taskInput.setAttribute('readonly', 'readonly')
                taskEdit.innerText = 'edit'
            }
        })

        taskDelete.addEventListener('click', () => {
            listEl.removeChild(taskEle)
        })


    })
})