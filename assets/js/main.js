const form = document.querySelector("form")
const inputAdd = document.getElementById("input-task")
const btnAdd = document.getElementById("btn-add")
const tasksBox = document.querySelector(".box-tasks")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let localItems = JSON.parse(localStorage.getItem("Items"))
    if(localItems === null){
        todos = []
    }
    else{
        todos = localItems
    }
    const obj = {
        title: inputAdd.value,
        id: todos.length
    }
    todos.push(obj)
    localStorage.setItem("Items", JSON.stringify(todos))
    todos.forEach(e => {
        const pEl = document.createElement("p")
        pEl.innerHTML = e.title + ` <button id='btnDelte' data-delete-btn=${e.id}>Delte</button>`
        document.body.appendChild(pEl)
    });
    

    })
    document.body.addEventListener('click', (e) => {
if(e.target.hasAttribute('data-delete-btn')){
    let event = e.target.dataset.deleteBtn
    let localstr = JSON.parse(localStorage.getItem("Items"))
    localstr.splice(event, 1)
}
    })


// const inputVal = document.getElementsByClassName('inputVal')[0];

//  const addTaskBtn = document.getElementsByClassName('btn')[0];
 

// addTaskBtn.addEventListener('click', function (){
  
// if(inputVal.value.trim()!=0){
//        let localItems = JSON.parse( localStorage.getItem('localItem'))
//     if(localItems === null){
//          taskList = []

//     }else{
//         taskList = localItems;
//     }
//     taskList.push(inputVal.value)
//     localStorage.setItem('localItem', JSON.stringify(taskList)); 
// }

//     showItem()
// })

// function showItem(){
//     let localItems = JSON.parse( localStorage.getItem('localItem'))
//     if(localItems === null){
//          taskList = []

//     }else{
//         taskList = localItems;
//     }


// let html = '';
// let itemShow = document.querySelector('.todoLists');
// taskList.forEach((data, index )=> {
    

//     html += `
//     <div class="todoList">
//     <p class="pText">${data}</p>
//     <button class="deleteTask" onClick="deleteItem(${index})">x</button>
//     </div>
//     `
// })
// itemShow.innerHTML = html;
// }
// showItem()

// function deleteItem(index){
//     let localItems = JSON.parse( localStorage.getItem('localItem'))
//     taskList.splice(index, 1)
//     localStorage.setItem('localItem', JSON.stringify(taskList));
//     showItem()
// }

// function clearTask(){
    
// localStorage.clear()
// showItem()
// }