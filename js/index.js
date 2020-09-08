let todoList = [];
let completeList = [];
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

    console.log(id);
  }

  // clear input field
  document.getElementById("todoInput").value = "";

  console.log(todoList);

  // render todo list
  renderTodos();
};

const renderTodos = () => {
  // clear
  document.getElementById("todoList").innerHTML = "";
  document.getElementById("completeList").innerHTM = "";

  // show Todo list on web browser
  let tempUndoneList = todoList.filter((task) => task.isDone == false);
  let tempDoneList = todoList.filter((task) => task.isDone == true);
  let unDoneHTML = tempUndoneList
    .map(
      (item) => `
  <li>${item.content}
      <div>
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
        <div>
            <button class="btn deleteBtn" onclick="deleteTask(${item.id})">
                <i class="fa fa-trash"></i>
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

  //   console.log("id:", id);
  todoList = todoList.filter((task) => task.id != id);

  renderTodos();
};

const completeTask = (id) => {
  // tu id tim index
  let completedIndex = todoList.findIndex((task) => task.id == id);
  // sua trang thai
  todoList[completedIndex].isDone = true;

  console.log(id);

  renderTodos();
};
