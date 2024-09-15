const resumeForm = document.getElementById("Resume") as HTMLFormElement;
const resumeDisplay = document.getElementById(
  "resume-display"
) as HTMLDivElement;

resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  // input value
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

  // Resume Generator
  const resume = `
<h2><b>Resume</b></h2>
<br>
<h3>Personal Information</h3>
<br>

<fieldset>

<fieldset>
<b> First Name :</b><p>${firstName}</p>
</fieldset>

<br>

<fieldset>
<b>Last Name :</b><p>${lastName}</p>
</fieldset>

<br>

<fieldset>
<p><b>Father Name :</b><p>${fatherName}</p>
</fieldset>

<br>

<fieldset>
<p><b>Email : </b><p>${email}</p>
</fieldset>

<br>

<fieldset>
<p><b>Phone Number :</b><p>${phoneNo}</p>
</fieldset>

<br>

<fieldset>
<p><b>Address :</b><p>${yourAddress}</p>
</fieldset>
</fieldset>





<fieldset>
<h3>About:</h3>
<p>${aboutYou}</p>
</fieldset>

<br>

<fieldset>
<h3>Education:</h3>
<p>${education}</p>
</fieldset>

<br>

<fieldset>
<h3>Skills:</h3>
<p>${skills}</p>
</fieldset>

<br>

<fieldset>
<h3>Experience:</h3>
<p>${experience}</p>
</fieldset>

`;

  if (resumeDisplay) {
    resumeDisplay.innerHTML = resume;
  } else {
    console.error("some information is missing.");
  }
});
