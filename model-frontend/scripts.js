import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', function() {
    const token = JSON.parse(sessionStorage.getItem('token'))
    // if (token)
        // document.querySelector('.header-buttons')?.innerHTML = `<svg fill="#594f2e" width="64px" height="64px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#594f2e" stroke-width="0.064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="about"> <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"></path> <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"></path> </g> </g></svg>`
})

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

const signUp = async function(userData) {
    try {
       const res = await fetch('https://modelhub-portfolio-project.onrender.com/api/auth/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
       })

       if (!res.ok) throw new Error('An unknown error occured')

       const data = await res.json()
       if (!data) throw new Error('An unknown error occured')


       return {data, bool: true}
    } catch (error) {
        return {error, bool: false}
    }
}

document.querySelector('.form-signup')?.addEventListener('submit', async function(e) {
    e.preventDefault()

    const userFirstName = document.querySelector('.firstname')
    const userLastName = document.querySelector('.lastname')
    const userName = document.querySelector('.username')
    const userEmail = document.querySelector('.email.signup-email')
    const userPassword = document.querySelector('.signup-password')

    const userData = {
        firstName: userFirstName.value,
        lastName: userLastName.value,
        username: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }

    console.log(userData)

    document.querySelector('.btn-submit-signup').textContent = 'Loading....'
    document.querySelector('.btn-submit-signup').disabled = true

    const {data, bool} = await signUp(userData)

    if (bool == true && data) {
        sessionStorage.clear() // clear session storage for any existing token value
        sessionStorage.setItem('token', JSON.stringify(data)) // save token to session storage

        document.querySelector('.signup-form')?.classList.add('hidden')
        document.querySelector('.btn-signup')?.classList.add('hidden')
        document.querySelector('.btn-login')?.classList.add('hidden')

        window.location = '/model-frontend/signupform.html'
    }
    
        // document.querySelector('.header-buttons').innerHTML = `<svg fill="#594f2e" width="15px" height="15px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#594f2e" stroke-width="0.064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="about"> <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"></path> <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"></path> </g> </g></svg>`
    })



    const logIn = async function(userData) {
        try {
           const res = await fetch('https://modelhub-portfolio-project.onrender.com/api/auth/getUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
           })

           console.log(res)
    
           //if (!res.ok) throw new Error('An unknown error occured')
    
           const data = await res.json()
           console.log(data)
           if (!data) throw new Error('An unknown error occured')
    
    
           return {data, bool: true}
        } catch (error) {
            return{ error, bool: false}
        }
    }

    document.querySelector('.form-login')?.addEventListener('submit', async function(e) {
        e.preventDefault()
    
        const userEmail = document.querySelector('.email')
        const userPassword = document.querySelector('.password')
    
        const userData = {
            email: userEmail.value,
            password: userPassword.value
        }

        console.log(userData)
    
        document.querySelector('.btn-submit-login').textContent = 'Loading....'
        document.querySelector('.btn-submit-login').disabled = true
    
        const {data, bool, error} = await logIn(userData)
    
        if (bool == true && data) {
            //sessionStorage.clear() // clear session storage for any existing token value
            //sessionStorage.setItem('token', JSON.stringify(value)) // save token to session storage
    
            document.querySelector('.signup-form')?.classList.add('hidden')
            document.querySelector('.btn-signup')?.classList.add('hidden')
            document.querySelector('.btn-login')?.classList.add('hidden')

            document.querySelector('.login-form').classList.add('hidden')

            document.querySelector('.header-buttons').innerHTML = `<a href="/model_profiles/mitchelle_lindsey.html">
            <svg fill="#594f2e" width="30px" height="30px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#594f2e" stroke-width="0.064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="about"> <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"></path> <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"></path> </g> </g></svg></a>`
        } else {
            console.log(error)
        }

})

/*
document.querySelector(".monthly-subscribe")?.addEventListener("click", async function () {
    console.log("Loading");

    try {
      // get user profile details
      const token = JSON.parse(sessionStorage.getItem("token")).token;
      if (!token) return;
      const res = await fetch(
        `https://modelhub-portfolio-project.onrender.com/api/auth/userProfile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { user } = await res.json();

      console.log(user.email, user._id);

      // make payment
      if (user) {
        console.log(user);
        const popup = new PaystackPop();
        popup.newTransaction({
          key: "pk_test_483fc950312e6a0d3eb5decb27b48f4b37615522",
          email: user.email,
          amount: 16500 * 100,
          onSuccess: (transaction) => {
            console.log(transaction);

            fetch(`https://modelhub-portfolio-project.onrender.com/api/transact/verify`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                reference: transaction.reference,
              }),
            }).then((response) => response.json()).then((verificationData) => {
                if (verificationData.status) 
                    window.location = '/model-frontend/modelform.html';
                // Handle verification data
              })
              .catch((error) => {
                console.error("Verification Error:", error);
              });
          },
          onload: (response) => {
            console.log(`onload: ${response}`);
          },
          oncancel: () => {
            console.log("Cancelled");
          },
          onerror: (error) => {
            console.log(`Error: ${error.message}`);
          },
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  });*/


document.querySelector(".monthly-subscribe")?.addEventListener("click", async function () {
  console.log("Loading");

  try {
    // get user profile details
    const token = JSON.parse(sessionStorage.getItem("token"))?.token;
    if (!token) {
      console.log("Token not found");
      return;
    }

    const res = await fetch(
      `https://modelhub-portfolio-project.onrender.com/api/auth/userProfile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { user } = await res.json();

    if (!user) {
      console.log("User not found");
      return;
    }

    console.log(user.email, user._id);

    // make payment
    const popup = new PaystackPop();
    popup.newTransaction({
      key: "pk_test_483fc950312e6a0d3eb5decb27b48f4b37615522",
      email: user.email,
      amount: 16500 * 100,
      onSuccess: async (transaction) => {
        console.log(transaction);

        try {
          const verificationRes = await fetch(
            `https://modelhub-portfolio-project.onrender.com/api/transact/verify`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                reference: transaction.reference,
              }),
            }
          );

          const verificationData = await verificationRes.json();

          if (verificationData.status) {
            console.log("Transaction verified successfully");
            // Redirect to the desired page
            window.location.href = "model-frontend/modelform.html";
          } else {
            console.error("Transaction verification failed", verificationData);
          }
        } catch (error) {
          console.error("Verification Error:", error);
        }
      },
      onload: (response) => {
        console.log(`onload: ${response}`);
      },
      oncancel: () => {
        console.log("Payment Cancelled");
      },
      onerror: (error) => {
        console.log(`Error: ${error.message}`);
      },
    });
  } catch (error) {
    console.log("Error occurred:", error.message);
  }
});  


// Get elements for newsletter
// Get elements
const subscribeBtn = document.getElementById('subscribeBtn');
const emailInput = document.getElementById('emailInput');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');

// Function to show modal
function showModal() {
    const emailValue = emailInput.value.trim();
    if (emailValue !== "" && validateEmail(emailValue)) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
    } else {
        alert("Please enter a valid email address.");
    }
}

// Function to close modal
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling after modal is closed
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Event listeners
subscribeBtn?.addEventListener('click', showModal);
closeModal?.addEventListener('click', closeModalFunc);

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling when closing modal by clicking outside
    }
};


