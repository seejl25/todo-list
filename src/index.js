/*http://localhost:8080/ */

import "./styles.css"
import { sidebarMenu } from "./sidebar"
import { projectList } from "./project";
import { displayAllProjs } from "./displayallprojects";
import { displayAllTasks } from "./displayall";
import { userInfo } from "./userInfo";

const menuBtn = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const siderbarContent = document.querySelector(".sidebar-content");
const mainContent = document.querySelector("#content");

/* Clicking on menu button to expand sidebar which will display all existing projects */
menuBtn.addEventListener("click", () => {
    sidebar.style.width = "15%";
    while (siderbarContent.firstChild) {
        siderbarContent.removeChild(siderbarContent.firstChild);
    }
    sidebarMenu();
    displayAllProjs();
    const userName = document.querySelector(".username");   //Adding username automatically 
    if (localStorage.getItem("username")) {
        userName.textContent = localStorage.getItem("username");
        userName.style.textDecoration = "none";
        userName.style.pointerEvents = "none";
        userName.style.color = "black";
        userName.style.fontSize = "1.5rem";
    } else {
        userName.textContent = "Sign In";
    }
    
    /* On the sidebar, there is a + icon. Clicking on the + icon will allow users to add in their own projects */
    const addProjBtn = document.querySelector(".add-project-name");
    addProjBtn.addEventListener("click", () => {
        projectList();
    })

    const addUserBtn = document.querySelector(".username");
    addUserBtn.addEventListener("click", () => {
        userInfo()
    })

})



