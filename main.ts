document.getElementById("resume-form")?.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect values from the form
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const location = (document.getElementById("location") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const educationDescription = (document.getElementById("education-description") as HTMLTextAreaElement).value;
  const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
  const workDescription = (document.getElementById("work-description1") as HTMLTextAreaElement).value;

  // Handle image upload
  const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageSrc = e.target?.result as string;

    // Generate the resume with Download and Delete buttons
    (document.getElementById("generated-resume") as HTMLElement).innerHTML = `
      <div class="resume-header">
        <img id="resume-image" src="${imageSrc}" alt="Profile Picture">
      </div>
      <div class="resume-header-info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
      </div>
      <div class="resume-section">
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>School/University:</strong> ${school}</p>
        <p><strong>Description:</strong> ${educationDescription}</p>
      </div>
      <div class="resume-section">
        <h3>Skills</h3>
        <p>${skill1}</p>
      </div>
      <div class="resume-section">
        <h3>Work Experience</h3>
        <p>${workDescription}</p>
      </div>
      <button id="download-resume" class="btn">Download Resume</button>
      <button id="delete-resume" class="btn">Delete Resume</button>
    `;

    // Show the generated resume
    (document.getElementById("generated-resume") as HTMLElement).style.display = "block";

    // Add download functionality
    document.getElementById("download-resume")?.addEventListener("click", function () {
      const generatedResume = document.getElementById("generated-resume") as HTMLElement;

      // Clone the resume content to exclude buttons
      const resumeClone = generatedResume.cloneNode(true) as HTMLElement;

      // Remove the download and delete buttons from the clone
      const downloadButton = resumeClone.querySelector("#download-resume");
      const deleteButton = resumeClone.querySelector("#delete-resume");
      if (downloadButton) downloadButton.remove();
      if (deleteButton) deleteButton.remove();

      // Create a Blob from the modified clone content
      const resumeContent = resumeClone.innerHTML;
      const blob = new Blob([resumeContent], { type: 'text/html' }); // Saving as an HTML file

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = "resume.html"; // You can change the file name and extension as needed (e.g., resume.txt or resume.pdf)
      link.click();
    });

    // Add delete functionality
    document.getElementById("delete-resume")?.addEventListener("click", function () {
      (document.getElementById("generated-resume") as HTMLElement).innerHTML = ''; // Clear the content
      (document.getElementById("generated-resume") as HTMLElement).style.display = 'none'; // Hide the resume
    });
  };

  if (profilePic) {
    reader.readAsDataURL(profilePic);
  }

  // Reset the form to clear the inputs
  (document.getElementById("resume-form") as HTMLFormElement).reset();
});
