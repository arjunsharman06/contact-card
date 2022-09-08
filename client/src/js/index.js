// Importing all the .js file in the index.js for webpack
//The entry point is the file that webpack will look at to determine what dependencies and assets are needed for the app to work.
import './form';
import './submit';

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

// Inserting the images during the page load
window.addEventListener('load', function () {
  document.getElementById('logo').src = Logo;
  // document.getElementById('logo').src = MyLogo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});
