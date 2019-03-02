let TODO_LIST = [];

function addTodo() {
  const titleElement = document.querySelector("#todoTitle");
  const descriptionElement = document.querySelector("#todoDescription");

  const todo = {
    title: titleElement.value,
    description: descriptionElement.value
  };

  TODO_LIST.push(todo);
  titleElement.value = '';
  descriptionElement.value ='';

  updateList();
  
}


function deleteTodo(todoIndex){

    const filteredTodo =  TODO_LIST.filter((todo,index)=> index != todoIndex);

    TODO_LIST =  filteredTodo;

    updateList()

}


function createTableContent(){

    let tableContent =``

    TODO_LIST.map((todo,index) =>{

        tableContent += `
        <tr>
        <td>${todo.title}</td>
        <td><button  onclick="editTodo(${index})">edit</button></td>
        <td><button  onclick="deleteTodo(${index})">delete</button></td>
        <td><p onclick="viewEvent(${index})">View Event</p></td>
        </tr>
        `

    })

    return tableContent;

}

function updateList(){

    const tableContent =  createTableContent()

    const tableBody =  document.querySelector("#todoTable tbody")
    tableBody.innerHTML =  tableContent;
    
}