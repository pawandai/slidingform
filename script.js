const form_area = document.querySelector('.form-area');
const sign_up_btn = document.getElementById('sign-up-btn');
const sign_in_btn = document.getElementById('sign-in-btn');

sign_up_btn.addEventListener('click', function() {
  form_area.classList.replace('in', 'up');
});

sign_in_btn.addEventListener('click', function() {
  form_area.classList.replace('up', 'in');
});