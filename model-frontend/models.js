// document.addEventListener('DOMContentLoaded', () => {
//     const modelLinks = document.querySelectorAll('.models-list .model h2 a');

//     modelLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const modelName = link.textContent.trim();
//             console.log(`Navigating to profile of ${modelName}`);
//             window.location.href = link.href;
//         });
//     });

//     const searchInput = document.getElementById('search-input');
//     const searchButton = document.getElementById('search-btn');

//     searchButton.addEventListener('click', () => {
//         const query = searchInput.value.trim().toLowerCase();
//         if (query) {
//             const models = document.querySelectorAll('.models-list .model');
//             models.forEach(model => {
//                 const modelName = model.querySelector
