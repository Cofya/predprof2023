function switchReg() {
    let reg = document.querySelector(".reg-menu__registration");
    let entry = document.querySelector(".reg-menu__entry");
    reg.classList.toggle("show");
    entry.classList.toggle("show");
}

document.querySelectorAll(".disturb-checkbox").forEach((elem) => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("active")
    })
})

document.querySelectorAll(".cabinet__sub-item").forEach((elem) => {
    if (elem.querySelector("button").classList.contains("show")) {
        elem.querySelector("span").style.color = "#7F8CA9"
    }
})

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function markDrop() {
    document.getElementById("dropdown__mark").classList.toggle("show");
}

