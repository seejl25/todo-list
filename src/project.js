import { addProj } from "./addproj";

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
    })
}

export {projectList}