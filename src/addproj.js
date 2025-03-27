import { addTask } from "./addtask";
import { displayAllTasks } from "./displayall"; 
import { addProjToArr } from "./localstorage";
function addProj() {

    /*Adding in list of projects */
    const sidebarContent = document.querySelector(".sidebar-content");

    const projContainer = document.createElement("div");
    projContainer.classList.add("project-container");

    const projName = document.querySelector('#project-name');
    const projColor = document.querySelector("#project-color");

    const projBtn = document.createElement("button");
    projBtn.classList.add("projects");
    projBtn.textContent = projName.value;

    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color-div");
    colorDiv.style.backgroundColor = `${projColor.value}`;
    colorDiv.style.width = "2rem";
    colorDiv.style.height = "1.5rem";
    

    const delProjBtn = document.createElement("button");
    delProjBtn.classList.add("del-proj-button");
    delProjBtn.innerHTML = '<i class="fa-solid fa-trash" style="color: #071fcf;"></i>';

    if (projName.value !== "") {
        projContainer.appendChild(colorDiv);
        projContainer.appendChild(projBtn);
        projContainer.appendChild(delProjBtn);
        sidebarContent.appendChild(projContainer);
        localStorage.setItem("project list", `${projBtn.textContent},${projColor.value}`)  
        addProjToArr()
    }

    /*Deleting individual projects */
    delProjBtn.addEventListener("click", () => {
        let i = 0;
        while (localStorage.getItem(`Project ${i}`)) {
            const projDetails = localStorage.getItem(`Project ${i}`);

            if (projDetails.split(",").at(0) === projBtn.textContent) {
                localStorage.removeItem(`Project ${i}`);
            }
            i++
          }
        // console.log(localStorage.getItem("Project ").split(",").at(0));
        // console.log(projBtn.textContent)
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
        localStorage.setItem("Project Name", projBtn.textContent)  
        console.log("clicked")
        displayAllTasks();
    })
    addTaskBtn.addEventListener("click", () => {
        addTask();
    })
}

export {addProj}