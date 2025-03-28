import { addProj } from "./addproj";

/* Displays the dialog for users to add in their projects by inputting the name and color label */
function projectList() {
    const addProjectDialog = document.querySelector('.add-project-dialog');
    addProjectDialog.showModal()

    const cancelBtn = document.querySelector(".cancel-project")
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addProjectDialog.close();
    })

    const addProjectBtn = document.querySelector(".add-project");
    addProjectBtn.addEventListener("click", (e) =>{
        addProj();
        e.preventDefault();
        addProjectDialog.close()
        resetDialog()
    })
}

function resetDialog() {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(eachInput => {
        if (eachInput.name === "project-name") {
            eachInput.value = "";
        }
        else if (eachInput.name === "project-color") {
            eachInput.value = "#ff0000";
        }
    })
}

export {projectList}