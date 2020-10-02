let todoList = [];
// let completeList = [];
let id = 0;

const addTodo = () => {
  //1. get the value from input
  let task = document.getElementById("todoInput").value;
  if (task) {
    id++;
    //2. insert into todo list
    let todoItem = {
      id: id,
      content: task,
      isDone: false,
    };
    todoList.push(todoItem);

    saveData();
  }

  // clear input field
  document.getElementById("todoInput").value = "";

  console.log(todoList);

  // render todo list
  renderTodos(todoList);
};

console.log("todolist", todoList);

const renderTodos = (todoList) => {
  // clear
  document.getElementById("todoList").innerHTML = "";
  document.getElementById("completeList").innerHTM = "";

  // show Todo list on browser
  let tempUndoneList = todoList.filter((task) => task.isDone == false);
  let tempDoneList = todoList.filter((task) => task.isDone == true);
  let unDoneHTML = tempUndoneList
    .map(
      (item) => `
  <li>${item.content}
      <div class="buttons">
          <button class="btn deleteBtn" onclick="deleteTask(${item.id})">
              <i class="fa fa-trash"></i>
          </button>
          <button class="btn completeBtn" onclick="completeTask(${item.id})">
              <i class="fa fa-check-circle"></i>
          </button>
      </div>
  </li>
`
    )
    .join("");

  let doneHTML = tempDoneList
    .map(
      (item) => `
    <li>${item.content}
        <div class="buttons">
            <button class="btn deleteBtn" onclick="deleteTask(${item.id})">
                <i class="fa fa-trash"></i>
            </button>
            <button class="btn completedBtn" onclick="completeTask(${item.id})">
              <i class="fa fa-check-circle"></i>
          </button>
        </div>
    </li>
  `
    )
    .join("");

  document.getElementById("todoList").innerHTML = unDoneHTML;
  document.getElementById("completeList").innerHTML = doneHTML;
};

const deleteTask = (id) => {
  //   todoList.splice(index, 1);

  todoList = todoList.filter((task) => task.id != id);

  renderTodos(todoList);
  saveData();
};

const completeTask = (id) => {
  // from id find index
  let completedIndex = todoList.findIndex((task) => task.id == id);
  // fix status
  // todoList[completedIndex].isDone = true;
  todoList[completedIndex].isDone = !todoList[completedIndex].isDone;

  renderTodos(todoList);
  saveData();
};


const saveData = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const getData = () => {
  let data = localStorage.getItem("todoList");
  data = JSON.parse(data);
  console.log("getData", data);

  if (data == null) {
    todoList = [];
  } else {
    todoList = data;
  }

  renderTodos(todoList);
};

getData();
