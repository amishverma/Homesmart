// import "./input.css"

const navBtn=document.querySelector("#menu");
const menuBar=document.querySelector("[role='menubar']")


navBtn.addEventListener("click",()=>{
    console.log("clicked")
    const isExpanded=JSON.parse(navBtn.getAttribute("aria-expanded"))
    console.log(isExpanded)

    navBtn.setAttribute("aria-expanded",!isExpanded)
    menuBar.classList.toggle("hidden")
    menuBar.classList.toggle("flex")
})

console.log("hello")