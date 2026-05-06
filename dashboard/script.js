const filtrobtn = document.querySelector("#btn-filtro");
const asideToggle = document.querySelector("#aside-toggle");

asideToggle.addEventListener("click", () => {
    const aside = document.querySelector(".aside-menu");
    const icon1 = document.querySelector(".aside-icon-open");
    const icon2 = document.querySelector(".aside-icon-fechado");

    aside.classList.toggle("inativo")
    icon1.classList.toggle("inativo")
    icon2.classList.toggle("inativo")
})

filtrobtn.addEventListener("click", () => {
    const containerFiltro = document.querySelector(".container-filtros");

    filtrobtn.classList.toggle("click");
    filtrobtn.classList.toggle("animar");
    containerFiltro.classList.toggle('inativo');

    filtrobtn.addEventListener("animationend", () => {
        filtrobtn.classList.toggle("animar");
    })

})