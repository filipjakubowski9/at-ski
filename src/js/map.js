function map() {
    const centerPnt = {lat: 52.328690, lng: 20.966330};
    const map = new google.maps.Map(document.getElementById('mainMap'), {
        zoom: 15,
        center: centerPnt
    });
    const marker = new google.maps.Marker({
        position: centerPnt,
        map: map,
        icon: 'images/marker.png'
    });
}

export {map}
