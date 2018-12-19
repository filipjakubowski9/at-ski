import {header} from './header';
import {Slider} from './banner';
import {parallax} from './parallax';
import {gallery} from './gallery';
import {map} from './map';

window.initMap = function() {
    map();
}

document.addEventListener('DOMContentLoaded', function() {

    header();
    parallax();
    gallery();

    const slider = new Slider('.banner');

})
