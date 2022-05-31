require('es6-promise').polyfill();

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import menu from './modules/menu';
import post from './modules/post';
import slider from './modules/slider';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
 
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);

  
  tabs();
  modal('.modal', '[data-modal]', modalTimerId);
  timer('2022-06-21');
  calc();
  menu();
  post(modalTimerId);
  slider();
});