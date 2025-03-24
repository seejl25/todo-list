function addProj() {
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

    projContainer.appendChild(colorDiv);
    projContainer.appendChild(projBtn);

    const widgets = document.createElement("div");
    const addTaskbtn = document.createElement("button");

    sidebarContent.appendChild(projContainer);
}

export {addProj}