var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Prevent the form from submitting
    // Collect values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var degree = document.getElementById("degree").value;
    var school = document.getElementById("school").value;
    var educationDescription = document.getElementById("education-description").value;
    var skill1 = document.getElementById("skill1").value;
    var workDescription = document.getElementById("work-description1").value;
    // Handle image upload
    var profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a, _b, _c;
        var imageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        // Generate the resume with Download and Delete buttons
        document.getElementById("generated-resume").innerHTML = "\n      <div class=\"resume-header\">\n        <img id=\"resume-image\" src=\"".concat(imageSrc, "\" alt=\"Profile Picture\">\n      </div>\n      <div class=\"resume-header-info\">\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Location:</strong> ").concat(location, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>School/University:</strong> ").concat(school, "</p>\n        <p><strong>Description:</strong> ").concat(educationDescription, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Skills</h3>\n        <p>").concat(skill1, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Work Experience</h3>\n        <p>").concat(workDescription, "</p>\n      </div>\n      <button id=\"download-resume\" class=\"btn\">Download Resume</button>\n      <button id=\"delete-resume\" class=\"btn\">Delete Resume</button>\n    ");
        // Show the generated resume
        document.getElementById("generated-resume").style.display = "block";
        // Add download functionality
        (_b = document.getElementById("download-resume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            var generatedResume = document.getElementById("generated-resume");
            // Clone the resume content to exclude buttons
            var resumeClone = generatedResume.cloneNode(true);
            // Remove the download and delete buttons from the clone
            var downloadButton = resumeClone.querySelector("#download-resume");
            var deleteButton = resumeClone.querySelector("#delete-resume");
            if (downloadButton)
                downloadButton.remove();
            if (deleteButton)
                deleteButton.remove();
            // Create a Blob from the modified clone content
            var resumeContent = resumeClone.innerHTML;
            var blob = new Blob([resumeContent], { type: 'text/html' }); // Saving as an HTML file
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = "resume.html"; // You can change the file name and extension as needed (e.g., resume.txt or resume.pdf)
            link.click();
        });
        // Add delete functionality
        (_c = document.getElementById("delete-resume")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
            document.getElementById("generated-resume").innerHTML = ''; // Clear the content
            document.getElementById("generated-resume").style.display = 'none'; // Hide the resume
        });
    };
    if (profilePic) {
        reader.readAsDataURL(profilePic);
    }
    // Reset the form to clear the inputs
    document.getElementById("resume-form").reset();
});
