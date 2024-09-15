var toggleButton = document.getElementById("container");
var mySkills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (mySkills.style.display === "none") {
        mySkills.style.display = "block";
    }
    else {
        mySkills.style.display = "none";
    }
});
