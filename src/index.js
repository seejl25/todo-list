/*http://localhost:8080/ */

import "./styles.css"
import { sidebarMenu } from "./sidebar"
import { projectList } from "./project";
import { displayAllProjs } from "./displayallprojects";

const menuBtn = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const siderbarContent = document.querySelector(".sidebar-content");
const mainContent = document.querySelector("#content");
// localStorage.clear();

menuBtn.addEventListener("click", () => {
    sidebar.style.width = "15%";
    while (siderbarContent.firstChild) {
        siderbarContent.removeChild(siderbarContent.firstChild);
    }
    sidebarMenu();
    displayAllProjs();
    

    const addProjBtn = document.querySelector(".add-project-name");
    addProjBtn.addEventListener("click", () => {
        projectList();
    })


})



