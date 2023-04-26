const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("todo-list");
todoInput.addEventListener("input", ontypeInput);

function ontypeInput(e) {
  if (todoInput.value !== "") {
    addBtn.removeAttribute("disabled");
  } else {
    addBtn.setAttribute("disabled", true);
  }
}
addBtn.addEventListener("click", onAddToDo);

function onAddToDo() {
  if (todoInput.value.trim() === "") {
    alert("Eroare:Empty task!");
    return;
  }
  console.log(todoInput.value);
  const todoText = todoInput.value;
  const toDoLi = document.createElement("li");
  const spanText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  spanText.innerHTML = todoInput.value;
  deleteBtn.innerHTML = "X";
  toDoLi.appendChild(spanText);
  toDoLi.appendChild(deleteBtn);
  toDoList.appendChild(toDoLi);
  todoInput.value = "";
  addBtn.setAttribute("disabled", true);
}
function createTodoLi(text) {
  const todoText = todoInput.value;
  const toDoLi = document.createElement("li");
  const spanText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  spanText.innerHTML = text;
  deleteBtn.innerHTML = "X";
  toDoLi.appendChild(spanText);
  toDoLi.appendChild(deleteBtn);
  toDoList.appendChild(toDoLi);
  return toDoLi;
}
