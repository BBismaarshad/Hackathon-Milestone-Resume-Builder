var resumeForm = document.getElementById("Resume");
var resumeDisplay = document.getElementById("resume-display");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // input value
    // const usernameElement = (document.getElementById("userame")as HTMLInputElement).value;
    var usernameElement = document.getElementById("userame");
    var firstName = document.getElementById("f-Name")
        .value;
    var lastName = document.getElementById("l-Name")
        .value;
    var fatherName = document.getElementById("father-Name").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("phone").value;
    var yourAddress = document.getElementById("address")
        .value;
    var aboutYou = document.getElementById("about").value;
    var education = document.getElementById("education")
        .value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience")
        .value;
    //5
    var userame = usernameElement.value;
    var uniquePath = "resumes/".concat(userame.replace(/\s+/g, "_"), "_cv.html");
    // Resume Generator
    var resume = "\n<h2><b>Editable Resume</b></h2>\n<br>\n<h3>Personal Information</h3>\n<br>\n\n<fieldset>\n\n\n<b> First Name :</b><p><span contenteditable=\"true\">".concat(firstName, "</span></p>\n\n\n<br>\n\n\n<b>Last Name :</b><p><span contenteditable=\"true\">").concat(lastName, "</span></p>\n\n\n<br>\n\n\n<p><b>Father Name :</b><p><span contenteditable=\"true\">").concat(fatherName, "</span></p>\n\n\n<br>\n\n\n<p><b>Email : </b><p><span contenteditable=\"true\">").concat(email, "</span></p>\n\n\n<br>\n\n\n<p><b>Phone Number :</b><p><span contenteditable=\"true\">").concat(phoneNo, "</span></p>\n\n\n<br>\n\n\n<p><b>Address :</b><p><span contenteditable=\"true\">").concat(yourAddress, "</span></p>\n\n</fieldset>\n\n\n\n\n\n<fieldset>\n<h3>About:</h3>\n<p contenteditable=\"true\">").concat(aboutYou, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<h3>Education:</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<h3>Skills:</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<h3>Experience:</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n</fieldset>\n\n ");
    var downloadLink = document.createElement("a");
    downloadLink.href =
        "data:text/html;charset=UTF-8," + encodeURIComponent(resume);
    downloadLink.download = uniquePath;
    downloadLink.textContent = "Download Resume";
    resumeForm.appendChild(downloadLink);
    ////555555
    /////4
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error("some information is missing.");
    }
});
