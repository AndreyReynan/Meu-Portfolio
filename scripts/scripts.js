//animações dos boxes de abilidade
let box1 = document.querySelectorAll("#box1")
let buttonVizualizar = document.querySelectorAll("#buttonVizualizaar")
box1[0].addEventListener("mouseenter", () =>{
    box1[0].style.height = "500px"
    buttonVizualizar[0].style.display = "block"
})
box1[0].addEventListener("mouseleave", () =>{
    box1[0].style.height ="430px"
    buttonVizualizar[0].style.display = "none"
})

box1[1].addEventListener("mouseenter", () =>{
    box1[1].style.height = "500px"
    buttonVizualizar[1].style.display = "block"
})
box1[1].addEventListener("mouseleave", () =>{
    box1[1].style.height ="430px"
    buttonVizualizar[1].style.display = "none"
})

box1[2].addEventListener("mouseenter", () =>{
    box1[2].style.height = "500px"
    buttonVizualizar[2].style.display = "block"
})
box1[2].addEventListener("mouseleave", () =>{
    box1[2].style.height ="430px"
    buttonVizualizar[2].style.display = "none"
})
//eu não achei outra forma de fazer kkkk só achei essa solução