document.getElementById("first").onclick = (e) => {
    let tag = document.querySelector(".container div:first-child");
    tag.className = "selected";
};
document.getElementById("all").onclick = (e) => {
    let tags = document.querySelectorAll(".container div");
    tags.forEach( tag => {
        tag.className = "selected";
    });
};
document.getElementById("clear").onclick = (e) => {
    let tags = document.querySelectorAll(".container div");
    tags.forEach( tag => {
        tag.classList.remove("selected");
    });
};