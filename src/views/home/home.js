import './home.scss';

/** Create Home Page **/
const homePage = () => {
    const heading = document.createElement("h1")
    heading.className = "text-center"
    heading.innerHTML = "Try Our Famous Burger!"
    const section1 = document.createElement('section');
    section1.className = "section-1"
    section1.appendChild(heading)
    return section1
}

const home = homePage();
export default home;


