import './styles.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import templatesCard from './templatesCard.hbs';
import templatesList from './templatesList.hbs';

const _ = require('lodash');
const debounced = _.debounce(searchCounty, 500);

const refs = {
  card: document.querySelector('.input__card'),
  inputCountry: document.querySelector('.input__country'),
};
function buildMarkupCard(data) {
  const markupCard = templatesCard(data[0]);
  refs.card.insertAdjacentHTML('beforeend', markupCard);
}
function buildMarkupList(data) {
  const markupList = templatesList(data);
  refs.card.insertAdjacentHTML('afterbegin', markupList);
}
function searchCounty(e) {
  const country = e.target.value;
  if (country) {
    return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length > 10) {
          refs.card.innerHTML = '';
          PNotify.error({
            title: 'Oh No!',
            text: 'To many matches.',
          });
        }
        if (data.length > 2 && data.length < 10) {
          refs.card.innerHTML = '';
          buildMarkupList(data);
        }
        if (data.length === 1) {
          refs.card.innerHTML = '';
          buildMarkupCard(data);
        }
      })
      .catch(function(e) {
        console.error(e);
      });
  }
}
const country = refs.inputCountry.addEventListener('input', debounced);
