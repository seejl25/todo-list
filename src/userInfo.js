import { addUser } from "./addUser";

/* To display dialog for users to sign in */
function userInfo() {
    const addUserDialog = document.querySelector('#userInfo');
    addUserDialog.showModal()

    const cancelBtn = document.querySelector(".cancel-user")
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addUserDialog.close();
    })

    const addUserBtn = document.querySelector(".add-user");
    addUserBtn.addEventListener("click", (e) =>{
        addUser();
        e.preventDefault();
        addUserDialog.close()
        resetDialog()
    })
}


function resetDialog() {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(eachInput => {
        eachInput.value = "";
    })
}

export {userInfo}