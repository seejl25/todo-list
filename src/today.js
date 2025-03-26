import { myTasks } from "./localstorage"
function displayToday() {
    const content = document.querySelector("#content")
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");
    let currDate = getCurrDate()
    for (let i = 0; i < myTasks.length; i++) {
        const taskInfo = myTasks[i];
        if (taskInfo.split(",").at(3) === currDate) {
            
            const projName = document.createElement("h1")
            projName.textContent = taskInfo.split(",").at(0);  //Adding project name
            content.appendChild(projName)

            const taskHeading = document.createElement("div");
            taskHeading.classList.add("task-heading");

            const taskName = document.createElement("div");
            taskName.classList.add("task-name");

            const title = document.createElement("h2");
            title.textContent = taskInfo.split(",").at(1);  //Adding task name
            const due = document.createElement("p");
            due.textContent = `Due: ${taskInfo.split(",").at(3)}`;  //Adding due date
            const completed = document.createElement("button");
            completed.classList.add("completed");
            const priorityIcon = document.createElement("p")
            if (taskInfo.split(",").at(4) === 'true') {  //Adding priority or not
                priorityIcon.innerHTML = '<i class="fa-solid fa-exclamation" style="color: #ff0000;"></i>'
                taskName.appendChild(priorityIcon);
            }
            else if (taskInfo.split(",").at(4) === 'false') {
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
                    description.textContent = `Description: ${taskInfo.split(",").at(2)}`;  //Adding task description
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
}

function getCurrDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month - 10 < 0) {
        month = '0' + month;
    } 
    let day = date.getDate();
    return `${year}-${month}-${day}`;
}

export {displayToday}