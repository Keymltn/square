let shirina = prompt("LENGTH");
let hight = prompt("HIGHT")
let cube = document.querySelector("#cube")
let btn = document.querySelector("#btn")

    btn.addEventListener("click" , () => {
        document.getElementById("cube").style.width = shirina + "px";
        document.getElementById("cube").style.height = hight + "px";
    })
