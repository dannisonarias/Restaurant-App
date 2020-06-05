import './menu.scss';

//* *  Create menu page **/
const createPage = () => {
  const heading = document.createElement('h1');
  heading.className = 'text-center';
  heading.innerHTML = 'Menu';
  const menuDiv = document.createElement('div');
  menuDiv.className = 'd-flex';
  menuDiv.innerHTML = `
    <div class="card">
      <h3>Ceviche</h3>
      <p>Ceviche is made from fresh raw fish cured in citrus juices, such...</p>
      <p>price: 25$</p>
    </div>
    <div class="card">
      <h3>Chicken Soup</h3>
      <p>Soup is a primarily liquid food, generally served warm or hot that is... </p>
      <p>price: 15$</p>
    </div>
    <div class="card">
      <h3>Burger</h3>
      <p>A hamburger (also burger for short) is a sandwich consisting of one...</p>
      <p>price: 11$</p>
    </div>
    <div class="card">
      <h3>Pasta</h3>
      <p>an Italian type of food typically made from an unleavened dough of...</p>
      <p>price: 60$</p>
    </div>`;
  const section1 = document.createElement('section');
  section1.className = 'section-2';
  section1.appendChild(heading);
  section1.appendChild(menuDiv);
  return section1;
};

const menu = createPage();

export default menu;
