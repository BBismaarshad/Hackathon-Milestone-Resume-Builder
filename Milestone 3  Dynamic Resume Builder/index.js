var resumeForm = document.getElementById("Resume");
var resumeDisplay = document.getElementById("resume-display");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // input value
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
    // Resume Generator
    var resume = "\n<h2><b>Resume</b></h2>\n<br>\n<h3>Personal Information</h3>\n<br>\n\n<fieldset>\n\n<fieldset>\n<b> First Name :</b><p>".concat(firstName, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<b>Last Name :</b><p>").concat(lastName, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<p><b>Father Name :</b><p>").concat(fatherName, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<p><b>Email : </b><p>").concat(email, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<p><b>Phone Number :</b><p>").concat(phoneNo, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<p><b>Address :</b><p>").concat(yourAddress, "</p>\n</fieldset>\n</fieldset>\n\n\n\n\n\n<fieldset>\n<h3>About:</h3>\n<p>").concat(aboutYou, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<h3>Education:</h3>\n<p>").concat(education, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<h3>Skills:</h3>\n<p>").concat(skills, "</p>\n</fieldset>\n\n<br>\n\n<fieldset>\n<h3>Experience:</h3>\n<p>").concat(experience, "</p>\n</fieldset>\n\n");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error("some information is missing.");
    }
});
