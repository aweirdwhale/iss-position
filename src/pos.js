const fetch = require('node-fetch');

async function getISS() {
    const iss = await fetch("http://api.open-notify.org/iss-now.json")
        .then(res => res.json())
        .then(json => json.iss_position);

    return(iss.longitude, iss.latitude);

}

export default getISS;