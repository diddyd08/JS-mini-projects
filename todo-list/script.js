let toDoList = [];
const toDoUl = document.querySelector(".todo-list");
const toDoForm = document.getElementById("add-todo");
const toDoInput = document.querySelector(".add-todo__input");

const deleteToDo = function(deletingToDo) {
  toDoList = toDoList.filter((toDo, index) => {
    return toDo != deletingToDo;
  });
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  displayToDoList();
}

const displayToDoList = function () {
  toDoUl.innerHTML = "";
  toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  toDoList.forEach((toDo) => {
    const listElement = document.createElement("li");
    listElement.textContent = toDo;
    
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
      deleteToDo(toDo);
    });
    listElement.appendChild(deleteBtn);
    
    listElement.addEventListener("click", () => {
        listElement.classList.toggle("todo-list__todo--unfinished");
        listElement.classList.toggle("todo-list__todo--finished");
    });
    listElement.classList.add("todo-list__todo--unfinished");
    toDoUl.appendChild(listElement);
  });
};

toDoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  toDoList.push(toDoInput.value);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  displayToDoList();
  toDoInput.value = "";
});

displayToDoList();
