let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Corrected variable name and added missing querySelectorAll
let navLinks = document.querySelectorAll('header nav a'); // Corrected variable name and added missing querySelectorAll


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Corrected offsetTop spelling and added missing semicolon
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(lnk => { // Corrected variable name to lnk
                lnk.classList.remove("active"); // Corrected variable name to lnk
                document.querySelector("header nav a[href='#" + id + "']").classList.add('active'); // Corrected querySelector syntax and added missing semicolon
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
