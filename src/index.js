import "./styles.css"
import { sidebarMenu } from "./sidebar"
import { projectList } from "./project";

const menuBtn = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const siderbarContent = document.querySelector(".sidebar-content");
menuBtn.addEventListener("click", () => {
    sidebar.style.width = "15%";
    while (siderbarContent.firstChild) {
        siderbarContent.removeChild(siderbarContent.firstChild);
    }
    sidebarMenu();

    const addProjBtn = document.querySelector(".add-project-name");
    addProjBtn.addEventListener("click", () => {
        projectList();
    })
})

