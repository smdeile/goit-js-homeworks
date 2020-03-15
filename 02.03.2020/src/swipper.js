import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default function() {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    on: {
      init: function() {
        console.log('swiper initialized');
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
