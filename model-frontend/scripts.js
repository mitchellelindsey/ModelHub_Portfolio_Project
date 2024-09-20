import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

// Adding a basic functionality for the search button
document.getElementById('search-btn')?.addEventListener('click', function() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        // For now, we'll just alert the search query.
        // In a real application, you'd search the database and show relevant profiles.
        alert('You searched for: ' + query);
    }
});




// /* Styling for the 'How ModelHub Can Help You as a Creative' section */
document.querySelectorAll('.dropdown-header')?.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Hide all other dropdown contents
        document.querySelectorAll('.dropdown-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });

        // Toggle the visibility of the current content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});




// /* Container for the "Connect With Us" section */
function isInViewport(element) {
    const rect = element?.getBoundingClientRect();
    return (
        rect?.top >= 0 &&
        rect?.left >= 0 &&
        rect?.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect?.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add event listener for scrolling
document.addEventListener('scroll', function() {
    const connectSection = document.querySelector('.section__container.connect-with-us');
    if (isInViewport(connectSection)) {
        connectSection.classList.add('fade-in');
    }
});




// section to the Swiper for reviews -->
const swiper1 = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });



  // section to the subscription plan-->
  document.addEventListener('DOMContentLoaded', function() {
    const planButtons = document.querySelectorAll('.plan-button');
    const planContents = document.querySelectorAll('.plan-content');

    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all plan contents
            planContents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the selected plan content
            const plan = this.getAttribute('data-plan');
            document.getElementById(plan).classList.add('active');
        });
    });
});


// section to the about us-->
//document.addEventListener('DOMContentLoaded', function () {
    //const swiper = new Swiper('.swiper', {
        //slidesPerView: 1,
        //spaceBetween: 30,
        //loop: true,
        //pagination: {
            //el: '.swiper-pagination',
            //clickable: true,
        //},
        //navigation: {
            //nextEl: '.swiper-button-next',
            //prevEl: '.swiper-button-prev',
        //},
    //});
//});

// section to the login and signup-->


// Optional: JavaScript for model form and handling login checks and other functionalities
//document.addEventListener('DOMContentLoaded', function () {
    //const isLoggedIn = checkLoginStatus(); // Replace with actual login check logic
    //if (!isLoggedIn) {
        //window.location.href = 'login.html'; // Redirect to login page if not logged in
    //}
//});

//function checkLoginStatus() {
    // Replace this with actual logic to check if the user is logged in
    //return false; // Assume user is not logged in for this example
//}

// Optional: JavaScript for model section
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-btn');

    searchButton?.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            console.log(`Searching for: ${query}`);
            // Add global search logic here
        }
    });
});

//login section
document.querySelector('.btn-login')?.addEventListener('click', function() {

    if (!document.querySelector('.signup-form').classList.contains('hidden'))
        document.querySelector('.signup-form').classList.add('hidden')

    document.querySelector('.login-form').classList.remove('hidden')
})

document.querySelector('.signup-link')?.addEventListener('click', function() {
    if (!document.querySelector('.login-form').classList.contains('hidden'))
        document.querySelector('.login-form').classList.add('hidden')

    document.querySelector('.signup-form').classList.remove('hidden')
})

document.querySelector('.icon-close')?.addEventListener('click', function() {
    document.querySelector('.login-form').classList.add('hidden')
})

//signup section
document.querySelector('.btn-signup')?.addEventListener('click', function() {

    if (!document.querySelector('.login-form').classList.contains('hidden'))
        document.querySelector('.login-form').classList.add('hidden')

    document.querySelector('.signup-form').classList.remove('hidden')
})

document.querySelector('.login-link')?.addEventListener('click', function() {
    if (!document.querySelector('.signup-form').classList.contains('hidden'))
        document.querySelector('.signup-form').classList.add('hidden')

    document.querySelector('.login-form').classList.remove('hidden')
})

document.querySelector('.signup-form .icon-close')?.addEventListener('click', function() {
    document.querySelector('.signup-form')?.classList.add('hidden')
})


    document.querySelectorAll('.btn-get-started')?.forEach(btn => {btn.addEventListener('click', function() {
        if (!document.querySelector('.login-form')?.classList.contains('hidden'))
            document.querySelector('.login-form')?.classList.add('hidden')

        document.querySelector('.signup-form')?.classList.remove('hidden')
    })})




// section FOR MODEL PROFILES
document.querySelector('.review-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('client-name').value;
    const review = document.getElementById('client-review').value;
    const rating = document.getElementById('client-rating').value;
    
    const reviewContainer = document.querySelector('.reviews');
    const newReview = document.createElement('p');
    newReview.innerHTML = `<strong>${name}:</strong> "${review}" ${'★'.repeat(rating)}${'☆'.repeat(5-rating)}`;
    
    reviewContainer.appendChild(newReview);
    
    // Reset form fields
    this.reset();
});
