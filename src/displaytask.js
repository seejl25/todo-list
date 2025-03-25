import { addTasksToArr } from "./localstorage";
import { myTasks } from "./localstorage";
function displayTask() {
    const content = document.querySelector("#content")

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    

    const taskTitle = document.querySelector('#task-title');
    const taskDescript = document.querySelector('#task-description');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector("#priority");
    const projectTitle = document.querySelector(".project-title")

    localStorage.setItem("Task Name", taskTitle.value);
    localStorage.setItem("Task Description", taskDescript.value);
    localStorage.setItem("Due Date", dueDate.value);
    localStorage.setItem("Priority", priority.checked);
    addTasksToArr()


        const taskHeading = document.createElement("div");
        taskHeading.classList.add("task-heading");

        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        const taskInfo = myTasks.at(-1);
        if (taskInfo.split(",").at(0) === projectTitle.textContent) {

            const title = document.createElement("h2");
            title.textContent = taskInfo.split(",").at(1);  //task title
            const due = document.createElement("p");
            due.textContent = `Due: ${taskInfo.split(",").at(3)}`;  //due date
            const completed = document.createElement("button");
            completed.classList.add("completed");
            const priorityIcon = document.createElement("p")
            if (priority.checked) {        //priority 
                priorityIcon.innerHTML = '<i class="fa-solid fa-exclamation" style="color: #ff0000;"></i>'
                taskName.appendChild(priorityIcon);
            }
            else {
                priorityIcon.innerHTML = '<i class="fa-solid fa-exclamation" style="color: #ffffff;"></i>'
                taskName.appendChild(priorityIcon);
            }
            taskName.appendChild(completed);
            taskName.appendChild(title);
            taskName.appendChild(due);
            
            const widget = document.createElement("div");
            widget.classList.add("widget");
            const moreInfo = document.createElement("button");
            moreInfo.classList.add("more-info");
            moreInfo.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            const delTask = document.createElement("button");
            delTask.classList.add("del-task");
            delTask.innerHTML = '<i class="fa-solid fa-trash" style="color: #071fcf;"></i>';
            widget.appendChild(moreInfo);
            widget.appendChild(delTask);
            
            taskHeading.appendChild(taskName);
            taskHeading.appendChild(widget);
            contentContainer.appendChild(taskHeading);
            content.appendChild(contentContainer);
            
            moreInfo.addEventListener("click", () => {
                if (moreInfo.innerHTML === '<i class="fa-solid fa-chevron-down"></i>') {
                    const description = document.createElement("p");
                    description.classList.add("description");
                    description.textContent = `Description: ${taskInfo.split(",").at(2)}`;  //description
                    contentContainer.appendChild(description);
                    moreInfo.innerHTML ='<i class="fa-solid fa-chevron-up"></i>';
                } else if (moreInfo.innerHTML === '<i class="fa-solid fa-chevron-up"></i>') {
                    contentContainer.removeChild(contentContainer.lastChild)
                    moreInfo.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
                }
            }) 
            
            delTask.addEventListener("click", () => {
                content.removeChild(contentContainer);
            })
            
            completed.addEventListener("click", () => {
                completed.style.backgroundColor = "#88e788";
                contentContainer.style.textDecoration = "line-through";
                contentContainer.style.color = "rgb(194, 193, 193)"
            })
        }
    
    
}
    


export {displayTask}