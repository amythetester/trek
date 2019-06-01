const URL = 'https://trektravel.herokuapp.com/trips';

const reportStatus = (message) => {
    $('#status-message').html(message);
};

const listTrips = () => {
    reportStatus('Loading trips...');

    const tripList = $('#trip-list');
    tripList.empty();

    axios.get(URL)
        .then((response) => {
            reportStatus(`Successfully loaded ${response.data.length} trips`);
            response.data.forEach((trip) => {
                tripList.append(`<li>${trip.name}</li>`);
            });
        })
        .catch((error) => {
            reportStatus(`Encountered an error while loading pets: ${error.message}`);
            console.log(error);
        });
};

$(document).ready(() => {
    $('#load').click(listTrips);
});