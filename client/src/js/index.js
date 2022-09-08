// Importing all the .js file in the index.js for webpack
//The entry point is the file that webpack will look at to determine what dependencies and assets are needed for the app to work.
import { fetchCards } from './cards';
import { toggleForm, clearForm } from './form';

// Import CSS files
import '../css/index.css';

// For bootstrap install following dependencies
//npm install bootstrap
//npm install @popperjs/core
// Boostrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import MyLogo from '../images/batman.jpg';

// Importing the indexeDB
import { initdb, getdb, postDb, deleteDb } from './database';

// Inserting the images during the page load
window.addEventListener('load', function () {
  initdb();
  // postDb('Lernantino', 'learnantino@test.com', 8186601234, 'Bear');
  // getdb();

  fetchCards();
  document.getElementById('logo').src = Logo;
  // document.getElementById('logo').src = MyLogo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

// Form functionality
const form = document.getElementById('formToggle');
const newContactButton = document.getElementById('new-contact');
let submitBtnToUpdate = false;
let profileId;

newContactButton.addEventListener('click', (event) => {
  toggleForm();
});

form.addEventListener('submit', (event) => {
  // Handle data
  event.preventDefault();
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let profile = document.querySelector('input[type="radio"]:checked').value;

  // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    postDb(name, email, phone, profile);
  } else {
    fetchCards();
    // Toggles the submit button back to POST functionality
    submitBtnToUpdate = false;
  }

  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();
});

window.deleteCard = (e) => {
  // Grabs the id from the button element attached to the contact card.
  let id = parseInt(e.id);
  // Delete the card
  deleteDb(id);
  // Reload the DOM
  fetchCards();
};
