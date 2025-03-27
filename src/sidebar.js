function sidebarMenu() {
    const sidebarContent = document.querySelector(".sidebar-content");

    const user = document.querySelector(".user");
    const userName = document.createElement("a");
    userName.classList.add("username");
    userName.setAttribute("href", "#");
    userName.textContent = "Sign in";
    user.appendChild(userName);

    // /*'today' tab */
    // const today = document.createElement("div");
    // today.classList.add("menu-tabs");
    // const todayTitle = document.createElement("button");
    // todayTitle.classList.add("today-title");
    // todayTitle.textContent = "Today";
    // const todayIcon = document.createElement("p");
    // todayIcon.innerHTML = '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>'
    // today.appendChild(todayIcon);
    // today.appendChild(todayTitle);
    // sidebarContent.appendChild(today);

    // /*'upcoming' tab */
    // const upcoming = document.createElement("div");
    // upcoming.classList.add("menu-tabs");
    // const upcomingTitle = document.createElement("button");
    // upcomingTitle.classList.add("upcoming-title");
    // upcomingTitle.textContent = "Upcoming";
    // const upcomingIcon = document.createElement("p");
    // upcomingIcon.innerHTML = '<i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>'
    // upcoming.appendChild(upcomingIcon);
    // upcoming.appendChild(upcomingTitle);
    // sidebarContent.appendChild(upcoming);

    // /*'important' tab */
    // const important = document.createElement("div");
    // important.classList.add("menu-tabs");
    // const importantTitle = document.createElement("button");
    // importantTitle.classList.add("important-title");
    // importantTitle.textContent = "Important";
    // const importantIcon = document.createElement("p");
    // importantIcon.innerHTML = '<i class="fa-solid fa-exclamation" style="color: #ff0000;"></i>'
    // important.appendChild(importantIcon);
    // important.appendChild(importantTitle);
    // sidebarContent.appendChild(important);

    // /*'overdue' tab */
    // const overdue = document.createElement("div");
    // overdue.classList.add("menu-tabs");
    // const overdueTitle = document.createElement("button");
    // overdueTitle.classList.add("overdue-title");
    // overdueTitle.textContent = "Overdue";
    // const overdueIcon = document.createElement("p");
    // overdueIcon.innerHTML = '<i class="fa-regular fa-clock"></i>';
    // overdue.appendChild(overdueIcon);
    // overdue.appendChild(overdueTitle);
    // sidebarContent.appendChild(overdue);

    /*'projects' list */
    const project = document.createElement("div");
    project.classList.add("project");
    const projectHeader = document.createElement("h2");
    projectHeader.classList.add("project-header");
    projectHeader.textContent = "PROJECTS";
    project.appendChild(projectHeader)
    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("add-project-name");
    addProjectBtn.innerHTML = '<i class="fa-regular fa-plus" style="color: #071fcf;"></i>';
    project.appendChild(addProjectBtn);
    sidebarContent.appendChild(project);

    
}

export {sidebarMenu}