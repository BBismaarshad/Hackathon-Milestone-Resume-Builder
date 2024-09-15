const toggleButton = document.getElementById("container") as HTMLButtonElement
const mySkills = document.getElementById("skills") as HTMLElement

toggleButton.addEventListener("click",()=>{
    if (mySkills.style.display === "none") {
        mySkills.style.display = "block"
        
    }else{
        mySkills.style.display = "none"
    }
})