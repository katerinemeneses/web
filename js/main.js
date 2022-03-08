const menu = document.getElementById("menu")
const menuHamburguesa = document.getElementById("menu-hamburguesa")
const equis = document.getElementById("equis")

menuHamburguesa.addEventListener("click", ()=>{
  menu.classList.add("mostrar-menu")
})

equis.addEventListener("click", ()=>{
  menu.classList.remove("mostrar-menu")
})
menu.addEventListener("click", (e) => {
  menu.classList.remove("mostrar-menu")
})