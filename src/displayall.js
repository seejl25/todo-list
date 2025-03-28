/* Displays all tasks from local storage even after page have been refreshed */
function displayAllTasks() {
    const content = document.querySelector("#content")
    const projectTitle = document.querySelector(".project-title")

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");
        let i = 0;

            while (Object.keys(localStorage).includes(`Task ${i}`) || Object.keys(localStorage).includes(`Task ${i+1}`) || Object.keys(localStorage).includes(`Task ${i+2}`)) {
                if (!Object.keys(localStorage).includes(`Task ${i}`)) {
                    i++;
                    continue;
                }
                // if (!Object.keys(localStorage).includes(`Task ${i+1}`)) {
                //     i += 2;
                //     continue;
                // }
                let taskInfo = localStorage.getItem(`Task ${i}`);
                if (taskInfo.split(",").at(0) === projectTitle.textContent) {
                    const taskHeading = document.createElement("div");
                    taskHeading.classList.add("task-heading");
                    taskHeading.dataset.taskId = taskInfo.split(",").at(5)
                    const taskName = document.createElement("div");
                    taskName.classList.add("task-name");
                    const title = document.createElement("h2");
                    title.textContent = taskInfo.split(",").at(1);  //task title
                    const due = document.createElement("p");
                    due.textContent = `Due: ${taskInfo.split(",").at(3)}`;  //due date
                    const completed = document.createElement("button");
                    completed.classList.add("completed");
                    const priorityIcon = document.createElement("p")
                    if (taskInfo.split(",").at(4) === 'true') {        //priority 
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
                            taskHeading.appendChild(description);
                            moreInfo.innerHTML ='<i class="fa-solid fa-chevron-up"></i>';
                        } else if (moreInfo.innerHTML === '<i class="fa-solid fa-chevron-up"></i>') {
                            taskHeading.removeChild(taskHeading.lastChild)
                            moreInfo.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
                        }
                    }) 
                    
                    delTask.addEventListener("click", () => {
                        const taskId = taskHeading.dataset.taskId
                        let j = 0;
                        while (localStorage.getItem(`Task ${j}`)) {
                            let taskDetails = localStorage.getItem(`Task ${j}`);

                            if (taskDetails.split(",").at(5) === taskId) {
                                localStorage.removeItem(`Task ${j}`);
                                break
                            }
                            j++
                        }
                        contentContainer.removeChild(taskHeading);
                    })
                    
                    completed.addEventListener("click", () => {
                        completed.style.backgroundColor = "#88e788";
                        taskHeading.style.textDecoration = "line-through";
                        taskHeading.style.color = "rgb(194, 193, 193)"
                    })
                }
                i++
            }
        
}

export {displayAllTasks}