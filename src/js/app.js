import {header} from './header';
import {Slider} from './banner';
import {parallax} from './parallax';


document.addEventListener('DOMContentLoaded', function() {

    header();
    parallax();

    const slider = new Slider('.banner');

})
