let data = [];
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
    acceptData();
};



let acceptData = () => {
  data.push({
    text: textInput.value,
    completed: false,
  });

  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((task, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <input onChange ="editTask(this);createTasks()" type="checkbox" name="complted" ${task.completed ? 'checked' : ''}>
          <span class=${task.completed ? 'compeleted' : ''}>${task.text}</span>
  
          <span class="options">
            <span onClick ="deleteTask(this);createTasks()" class="delete">Delete</span>
          </span>
        </div>
    `);
  });

  resetForm();
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  
};
let editTask = (e) => {
  data[e.parentElement.id].completed = !data[e.parentElement.id].completed;
  createTasks();
};


let resetForm = () => {
  textInput.value = "";
};

(() => {
  createTasks();
})();
