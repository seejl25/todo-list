import { myProjects } from "./localstorage";
function displayAllProjs() {
    const sidebarContent = document.querySelector(".sidebar-content");

    for (let i = 0; i < myProjects.length; i++) {
        if (localStorage.getItem(`Project ${i}`)) {
            const projInfo = localStorage.getItem(`Project ${i}`)
            const projContainer = document.createElement("div");
            projContainer.classList.add("project-container");
            const projBtn = document.createElement("button");
            projBtn.classList.add("projects");
            projBtn.textContent = projInfo.split(",").at(0);
            console.log(projInfo.split(",").at(0))

            const colorDiv = document.createElement("div");
            colorDiv.classList.add("color-div");
            colorDiv.style.backgroundColor = `${projInfo.split(",").at(1)}`;
            colorDiv.style.width = "2rem";
            colorDiv.style.height = "1.5rem";
    

            const delProjBtn = document.createElement("button");
            delProjBtn.classList.add("del-proj-button");
            delProjBtn.innerHTML = '<i class="fa-solid fa-trash" style="color: #071fcf;"></i>';

            if (projInfo.split(",").at(0) !== "") {
                projContainer.appendChild(colorDiv);
                projContainer.appendChild(projBtn);
                projContainer.appendChild(delProjBtn);
                sidebarContent.appendChild(projContainer);
            }

            /*Deleting individual projects */
            delProjBtn.addEventListener("click", () => {
                sidebarContent.removeChild(projContainer);
            })

            /*displaying content */
            const mainContent = document.querySelector('#content');
            const contentHeader = document.createElement("div");    //header div for project title and add task icon
            contentHeader.classList.add("content-header");
            const projectTitle = document.createElement("h1");      //displaying project title
            projectTitle.classList.add("project-title");
            const addTaskBtn = document.createElement("button");    //diaplaying button to add tasks
            addTaskBtn.classList.add("add-task-btn");
            addTaskBtn.innerHTML = '<i class="fa-regular fa-plus" style="color: #071fcf;"></i>';
            projBtn.addEventListener("click", () => {               //when click on project name on the sidebar, project tile and add task btn will be displayed
                while (mainContent.firstChild) {
                    mainContent.removeChild(mainContent.firstChild);
                }
                projectTitle.textContent = projBtn.textContent;
                contentHeader.appendChild(projectTitle);
                contentHeader.appendChild(addTaskBtn);
                mainContent.appendChild(contentHeader);
           
                displayAllTasks();
            })
            addTaskBtn.addEventListener("click", () => {
                addTask();
            })
        }
    }
    
}

export {displayAllProjs}