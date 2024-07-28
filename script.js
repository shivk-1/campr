const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const btnLogoutPopup = document.querySelector('.btnLogout-popup');
const iconClose = document.querySelector('.icon-close');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');

// Handle tab clicks
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = link.dataset.tab;

        // Remove 'active' class from all tabs and tab contents
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and its content
        link.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Event listeners for opening and closing the login/register popup
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});

// Login button event listener
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.login input[type="email"]').value;
    const passwordInput = document.querySelector('.login input[type="password"]').value;

    const storedUser = JSON.parse(localStorage.getItem(emailInput));

    if (storedUser && storedUser.password === passwordInput) {
        alert('Login successful');
        wrapper.classList.remove('active-popup');
        btnLoginPopup.style.display = 'none';
        btnLogoutPopup.style.display = 'block';
    } else {
        alert('Incorrect username or password');
    }
});

// Logout button event listener
btnLogoutPopup.addEventListener('click', () => {
    btnLoginPopup.style.display = 'block';
    btnLogoutPopup.style.display = 'none';
});

// Register button event listener
registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.register input[type="email"]').value;
    const passwordInput = document.querySelector('.register input[type="password"]').value;

    if (localStorage.getItem(emailInput)) {
        alert('User already exists');
    } else {
        localStorage.setItem(emailInput, JSON.stringify({ password: passwordInput }));
        alert('Registration successful');
        wrapper.classList.remove('active');
        wrapper.classList.add('active-popup');
    }
});
