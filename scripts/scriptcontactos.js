function initMap() {
    const officeLocation = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: officeLocation
    });
    const marker = new google.maps.Marker({
        position: officeLocation,
        map: map
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            directionsService.route({
                origin: userLocation,
                destination: officeLocation,
                travelMode: 'DRIVING'
            }, (result, status) => {
                if (status == 'OK') {
                    directionsRenderer.setDirections(result);
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});
