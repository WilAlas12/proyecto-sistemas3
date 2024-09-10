const desp = document.querySelectorAll(".list");

desp.forEach(list =>  {
    list.addEventListener("click", () => {
        list.classList.toggle("activa");
    })
})