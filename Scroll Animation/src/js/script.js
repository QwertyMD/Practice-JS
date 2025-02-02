const content = document.querySelector(".content")
const boxAmount = 10
for(i=0;i<boxAmount;i++){
    const create = document.createElement("div")
    create.classList.add("box", "h-44", "w-44", "bg-red-400")
    content.appendChild(create)
}

const boxes = document.querySelectorAll(".box")
const observer = new IntersectionObserver((e)=>{
    e.forEach((e)=>{
        if (e.isIntersecting){
            e.target.classList.add("visible")
        } else {
            e.target.classList.remove("visible")
        }
    })
}, {
    threshold: 0.1
})

boxes.forEach((e)=>{
    observer.observe(e)
})