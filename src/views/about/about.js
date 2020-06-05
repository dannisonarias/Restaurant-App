//* *  Create about page **/
import './about.scss';

const createPage = () => {
  const heading = document.createElement('h1');
  heading.className = 'text-center';
  heading.innerHTML = 'Our History';
  const paragraph = document.createElement('p');
  paragraph.innerHTML = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum";
  const section1 = document.createElement('section');
  section1.className = 'section-3';
  section1.appendChild(heading);
  section1.appendChild(paragraph);
  return section1;
};

const about = createPage();

export default about;