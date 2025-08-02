const textElement = document.getElementById("pro");
const professions = ["Software Developer", "Web Developer","Creative Thinker"];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150; // Adjust speed (ms per character)

function typeWriter() {
  const currentText = professions[professionIndex];
  
  // Typing
  if (!isDeleting && charIndex <= currentText.length) {
    textElement.textContent = currentText.substring(0, charIndex);
    charIndex++;
    typingSpeed = 50; // Typing speed
  } 
  // Deleting
  else if (isDeleting && charIndex >= 0) {
    textElement.textContent = currentText.substring(0, charIndex);
    charIndex--;
    typingSpeed = 60; // Faster deletion
  } 
  // Switch to next profession or reverse direction
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      professionIndex = (professionIndex + 1) % professions.length;
    }
    typingSpeed = isDeleting ? 1000 : 500; // Pause after typing/deleting
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start the effect
typeWriter();

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });