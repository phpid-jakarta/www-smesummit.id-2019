import Rellax from 'rellax';

require('intersection-observer');
require('./index.scss');

document.addEventListener('DOMContentLoaded', function() {
  new Rellax('.rellax');
  if ('IntersectionObserver' in window) {
    var about = document.querySelector('#conf_title');
    let lazyImageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.intersectionRatio <= 0) {
          document.querySelector('.header_sticky').classList.add('is--have-bg');
        } else {
          document
            .querySelector('.header_sticky')
            .classList.remove('is--have-bg');
        }
      });
    });

    lazyImageObserver.observe(about);
  }

  const burgerEl = document.getElementsByClassName('burger')[0];
  const menuEl = document.getElementsByClassName('mobile-menu')[0];
  const activeCls = 'is-active';
  const hideMobileMenu = () => {
    menuEl.classList.remove(activeCls);
    burgerEl.classList.remove(activeCls);
  };
  const showMobileMenu = () => {
    burgerEl.classList.add(activeCls);
    menuEl.classList.add(activeCls);
  };

  const onClickMenuMobile = () => {
    hideMobileMenu();
  };

  const onClickBurger = () => {
    if (burgerEl.classList.contains(activeCls)) {
      hideMobileMenu();
    } else {
      showMobileMenu();
    }
  };

  burgerEl.addEventListener('click', onClickBurger);
  menuEl.addEventListener('click', onClickMenuMobile);
});

'serviceWorker' in navigator &&
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
