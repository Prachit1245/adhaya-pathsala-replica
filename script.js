
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
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
        const popupModal = document.getElementById('popup-modal');
        if (popupModal) {
            popupModal.classList.remove('hidden');
            console.log('Popup should be visible now');
        } else {
            console.log('Popup modal not found');
        }
    }, 2000); // Show after 2 seconds
    
    // Close popup functionality
    const closePopupBtn = document.getElementById('close-popup');
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', function() {
            const popupModal = document.getElementById('popup-modal');
            if (popupModal) {
                popupModal.classList.add('hidden');
            }
        });
    }
    
    // Popup image click to open inquiry form
    const popupImage = document.getElementById('popup-image');
    if (popupImage) {
        popupImage.addEventListener('click', function() {
            openInquiryForm();
        });
    }
    
    // Close popup when clicking outside
    const popupModal = document.getElementById('popup-modal');
    if (popupModal) {
        popupModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    }
    
    // Close inquiry modal
    const closeInquiryBtn = document.getElementById('close-inquiry');
    if (closeInquiryBtn) {
        closeInquiryBtn.addEventListener('click', function() {
            const inquiryModal = document.getElementById('inquiry-modal');
            if (inquiryModal) {
                inquiryModal.classList.add('hidden');
            }
        });
    }
    
    // Close inquiry modal when clicking outside
    const inquiryModal = document.getElementById('inquiry-modal');
    if (inquiryModal) {
        inquiryModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    }
    
    // Form submission handler for contact form
    const contactForm = document.querySelector('form:not(#inquiry-form)');
    if (contactForm) {
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
    
    // Add event listeners to all inquiry buttons
    const inquiryButtons = document.querySelectorAll('.inquiry-open-btn, .apply-now-btn, .join-now-btn, .apply-admission-btn, .download-prospectus-btn, .download-application-btn, .contact-admissions-btn');
    inquiryButtons.forEach(button => {
        button.addEventListener('click', function() {
            openInquiryForm();
        });
    });
});

// Function to open inquiry form
function openInquiryForm() {
    console.log('Opening inquiry form');
    const popupModal = document.getElementById('popup-modal');
    const inquiryModal = document.getElementById('inquiry-modal');
    
    if (popupModal) {
        popupModal.classList.add('hidden');
    }
    if (inquiryModal) {
        inquiryModal.classList.remove('hidden');
        console.log('Inquiry form opened');
    } else {
        console.log('Inquiry modal not found');
    }
}
