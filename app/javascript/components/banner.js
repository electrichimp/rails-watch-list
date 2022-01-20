// app/javascript/components/banner.js
import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Crea tus listas", "Elige tus pelis", "Escribe tus bookmarks"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
