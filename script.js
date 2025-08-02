document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get basic form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const summary = document.getElementById("summary").value.trim();
  const education = document.getElementById("education").value;

  // Get selected skills
  const skillEls = document.querySelectorAll('input[name="skills"]:checked');
  const skills = Array.from(skillEls).map(el => el.value);

  // Get selected experience
  const expEls = document.querySelectorAll('input[name="experience"]:checked');
  const experience = Array.from(expEls).map(el => el.value);

  // Simple validation
  if (!name || !email || !phone || !summary || !education || skills.length === 0 || experience.length === 0) {
    alert("Please fill all fields and select at least one skill and experience.");
    return;
  }

  // Populate resume template
  document.getElementById("r-name").textContent = name;
  document.getElementById("r-email").textContent = email;
  document.getElementById("r-phone").textContent = phone;
  document.getElementById("r-education").textContent = education;
  document.getElementById("r-skills").textContent = skills.join(", ");
  document.getElementById("r-experience").textContent = experience.join(", ");
  document.getElementById("r-summary").textContent = summary;

  // Show resume and hide form
  document.getElementById("resume").classList.remove("hidden");
  document.getElementById("resumeForm").classList.add("hidden");
});