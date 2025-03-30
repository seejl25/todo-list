function addUser() {
    const username = document.querySelector('#username');    // refers to username from dialog
    const userName = document.querySelector(".username");    // refers to the anchor tag
    // userName.textContent = "";
    localStorage.setItem("username", username.value)
    userName.textContent = localStorage.getItem("username");
    userName.style.textDecoration = "none";
    userName.style.pointerEvents = "none";
    userName.style.color = "black";
    userName.style.fontSize = "1.5rem";
}

export {addUser}