import './home.scss';

/** Create Home Page * */
const homePage = () => {
  const heading = document.createElement('h1');
  heading.className = 'text-center';
  heading.innerHTML = 'Check out our Menu!';
  const menuCard = document.createElement('div');
  menuCard.innerHTML = `<div class="card2">
  <a class="nav-link a-menu" href="#"><h3>MENU</h3>
  </a>
  </div>`;
  const section1 = document.createElement('section');
  section1.className = 'section-1';
  section1.appendChild(heading);
  section1.appendChild(menuCard);
  return section1;
};

const home = homePage();
export default home;
