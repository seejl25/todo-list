import { displayTask } from "./displaytask";

/* Displays the dialog for users to add in the tasks for each project */
function addTask() {
    const addTaskDialog = document.querySelector(".add-task-dialog");
    resetTaskDialog()
    addTaskDialog.showModal();

    const cancelTaskBtn = document.querySelector(".cancel-task")
    cancelTaskBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addTaskDialog.close();
    })

    const addTaskBtn = document.querySelector(".add-task");
    addTaskBtn.replaceWith(addTaskBtn.cloneNode(true));  // Remove old event listeners
    const newAddTaskBtn = document.querySelector(".add-task");
    newAddTaskBtn.addEventListener("click", (e) =>{
        displayTask();
        e.preventDefault();
        addTaskDialog.close()
    })
}

function resetTaskDialog() {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(eachInput => {
        if (eachInput.name === "task-title" || eachInput.name === "due-date") {
            eachInput.value = "";
        }
        else if (eachInput.name === "priority") {
            eachInput.checked = false;
        }
    })
    const textarea = document.querySelector("#task-description");
    textarea.value = "";
}

export {addTask}