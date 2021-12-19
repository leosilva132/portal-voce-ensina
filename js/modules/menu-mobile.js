import outsideClick from '../outsideClick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const menuIcon = document.querySelector('.hb-menu');
  const eventos = ['click', 'touchstart'];
  if(menuButton) {
  function openMenu(event) {
    menuList.classList.add('ativa');
    menuButton.classList.add('ativa');
    menuIcon.classList.add('ativa');
    outsideClick(menuList, eventos, () => {
  
      menuList.classList.remove('ativa');
      menuButton.classList.remove('ativa');
      menuIcon.classList.remove('ativa');
    })
  }
  eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
  }
}
