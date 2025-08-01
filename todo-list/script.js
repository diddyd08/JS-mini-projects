let toDoList = [];
const toDoUl = document.querySelector(".todo-list");
const toDoForm = document.getElementById("add-todo");
const toDoInput = document.querySelector(".add-todo__input");

const loadToDoList = function() {
  const savedToDoList = localStorage.getItem("toDoList");
  toDoList = savedToDoList? JSON.parse(savedToDoList) : [];
};

const displayToDoList = function () {
  toDoUl.innerHTML = "";
  toDoList.forEach((toDo) => {
    const listElement = document.createElement("li");
    listElement.textContent = toDo.toDoText;
    listElement.title = "클릭 시 완료"
    
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    deleteBtn.title = "클릭 시 삭제"

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

function deleteToDo (deletingToDo) {
  toDoList = toDoList.filter((toDo, index) => {
    return toDo.toDoId != deletingToDo.toDoId;
  });
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  displayToDoList();
}

toDoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  toDoList.push({
    toDoText: toDoInput.value,
    toDoId: new Date().getTime()
  });
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  displayToDoList();
  toDoInput.value = "";
});

loadToDoList();
displayToDoList();
