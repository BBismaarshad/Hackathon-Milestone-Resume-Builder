const resumeForm = document.getElementById("Resume") as HTMLFormElement;
const resumeDisplay = document.getElementById(
  "resume-display"
) as HTMLDivElement;

resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  // input value
  // const usernameElement = (document.getElementById("userame")as HTMLInputElement).value;

  const usernameElement = document.getElementById(
    "userame"
  ) as HTMLInputElement;
  const firstName = (document.getElementById("f-Name") as HTMLInputElement)
    .value;
  const lastName = (document.getElementById("l-Name") as HTMLInputElement)
    .value;
  const fatherName = (
    document.getElementById("father-Name") as HTMLInputElement
  ).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phoneNo = (document.getElementById("phone") as HTMLInputElement).value;
  const yourAddress = (document.getElementById("address") as HTMLInputElement)
    .value;
  const aboutYou = (document.getElementById("about") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;

  //5

  const userame = usernameElement.value;
  const uniquePath = `resumes/${userame.replace(/\s+/g, "_")}_cv.html`;

  // Resume Generator
  const resume = `
<h2><b>Editable Resume</b></h2>
<br>
<h3>Personal Information</h3>
<br>

<fieldset>


<b> First Name :</b><p><span contenteditable="true">${firstName}</span></p>


<br>


<b>Last Name :</b><p><span contenteditable="true">${lastName}</span></p>


<br>


<p><b>Father Name :</b><p><span contenteditable="true">${fatherName}</span></p>


<br>


<p><b>Email : </b><p><span contenteditable="true">${email}</span></p>


<br>


<p><b>Phone Number :</b><p><span contenteditable="true">${phoneNo}</span></p>


<br>


<p><b>Address :</b><p><span contenteditable="true">${yourAddress}</span></p>

</fieldset>





<fieldset>
<h3>About:</h3>
<p contenteditable="true">${aboutYou}</p>
</fieldset>

<br>

<fieldset>
<h3>Education:</h3>
<p contenteditable="true">${education}</p>
</fieldset>

<br>

<fieldset>
<h3>Skills:</h3>
<p contenteditable="true">${skills}</p>
</fieldset>

<br>

<fieldset>
<h3>Experience:</h3>
<p contenteditable="true">${experience}</p>
</fieldset>

 `;

  const downloadLink = document.createElement("a");
  downloadLink.href =
    "data:text/html;charset=UTF-8," + encodeURIComponent(resume);
  downloadLink.download = uniquePath;
  downloadLink.textContent = "Download Resume";
  resumeForm.appendChild(downloadLink);

  ////555555

  /////4
  if (resumeDisplay) {
    resumeDisplay.innerHTML = resume;
  } else {
    console.error("some information is missing.");
  }
});
