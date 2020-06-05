import './menu.scss';

//* *  Create menu page **/
const createPage = () => {
  const heading = document.createElement('h1');
  heading.className = 'text-center';
  heading.innerHTML = 'Todays Menu';
  const section1 = document.createElement('section');
  section1.className = 'section-2';
  section1.appendChild(heading);
  return section1;
};

const menu = createPage();

export default menu;
