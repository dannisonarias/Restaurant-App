import './style.scss';
import menu from './views/menu/menu';
import home from './views/home/home';
import about from './views/about/about';
import navigationbar from './views/navbar/navbar';

window.home = home;
window.menu = menu;
window.about = about;


const display = () => {
  const main2 = document.querySelector('#content2');

  const clearContent = () => {
    main2.innerHTML = '';
  };

  const evalutate = (element) => {
    if (element === 'home') {
      return home;
    } if (element === 'menu') {
      return menu;
    } if (element === 'about') {
      return about;
    }
    return menu;
  };

  const renderDom = () => {
    clearContent();
    const element = event.target.innerHTML.toLowerCase();
    main2.appendChild(evalutate(element));
  };

  const renderHome = () => {
    main2.appendChild(home);
  };

  const clickListeners = () => {
    const aTags = document.getElementsByTagName('a');
    for (let i = 0; i < aTags.length; i += 1) {
      aTags[i].addEventListener('click', renderDom, false);
    }
  };
  clearContent();
  renderHome();
  navigationbar.createNav();
  clickListeners();
};

display();