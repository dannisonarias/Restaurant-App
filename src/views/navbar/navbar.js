
// ** Create Nav Bar **/
const createNav = () => {
    const main = document.querySelector("#content")
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = "nav justify-content-center"
    const homeLink = document.createElement('li');
    homeLink.innerHTML = '<a class="nav-link a-home" href="#">Home</a>'
    const aboutLink = document.createElement('li');
    aboutLink.innerHTML = '<a class="nav-link a-about" href="#">About</a>'
    const menuLink = document.createElement('li');
    menuLink.innerHTML = '<a class="nav-link a-menu" href="#">Menu</a>'
    ul.appendChild(homeLink)
    ul.appendChild(menuLink)
    ul.appendChild(aboutLink)
    nav.appendChild(ul);
    main.prepend(nav)
};

const navigationbar = {createNav}
export default navigationbar