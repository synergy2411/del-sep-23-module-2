import { User } from "../controller/user.js"
window.onload = function () {

    var btnFetch = document.getElementById("btnFetch");
    var user = new User();

    btnFetch.addEventListener("click", function () {
        user.getUsers();
    })

}