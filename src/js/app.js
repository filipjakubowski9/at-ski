import {header} from './header';
import {Slider} from './banner';
import {parallax} from './parallax';
import {map} from './map';

window.initMap = function() {
    map();
}

document.addEventListener('DOMContentLoaded', function() {

    header();
    parallax();

    const slider = new Slider('.banner');

})
