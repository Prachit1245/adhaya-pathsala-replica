
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Show popup on page load
    setTimeout(function() {
        document.getElementById('popup-modal').classList.remove('hidden');
    }, 2000); // Show after 2 seconds
    
    // Close popup functionality
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup-modal').classList.add('hidden');
    });
    
    // Close popup when clicking outside
    document.getElementById('popup-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });
    
    // Close inquiry modal
    document.getElementById('close-inquiry').addEventListener('click', function() {
        document.getElementById('inquiry-modal').classList.add('hidden');
    });
    
    // Close inquiry modal when clicking outside
    document.getElementById('inquiry-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });
    
    // Form submission handler
    const contactForm = document.querySelector('form');
    if (contactForm && !contactForm.id) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Inquiry form submission
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Create mailto link with form data
            const subject = encodeURIComponent('New Student Inquiry - ' + data.studentName);
            const body = encodeURIComponent(`
Student Name: ${data.studentName}
School Name: ${data.schoolName}
SEE GPA: ${data.seeGpa}
Program Choice: ${data.program}
Contact Number: ${data.contactNumber}

This inquiry was submitted through the website inquiry form.
            `);
            
            const mailtoLink = `mailto:info@adhaya.edu.np?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
            
            alert('Thank you for your inquiry! Your default email client will open to send the inquiry.');
            document.getElementById('inquiry-modal').classList.add('hidden');
            this.reset();
        });
    }
    
    // Button click handlers
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent.includes('Apply Now') || 
            button.textContent.includes('JOIN NOW') ||
            button.textContent.includes('Learn More') ||
            button.textContent.includes('Apply for Admission') ||
            button.textContent.includes('Download Application')) {
            button.addEventListener('click', function() {
                alert('Admissions are open! Please contact us at +977 9840065951 or info@adhaya.edu.np for more information.');
            });
        }
    });
});

// Function to open inquiry form
function openInquiryForm() {
    document.getElementById('popup-modal').classList.add('hidden');
    document.getElementById('inquiry-modal').classList.remove('hidden');
}
