const moment = require('moment');
const timestamp = { parser : null };

let processed = {
    "unix": "error",
    "utc": "Invalid value"
};

const formatUTC = function(momentObj) {
    return momentObj.format('ddd, DD MMM YYYY HH:mm:ss') + ' GMT';
}

timestamp.parser = (request, response) => {
    const value = request.params.query;

    // Handles an empty date string
    if (Object.keys(request.params).length == 0) {    
        let now = moment().utc();
        processed.unix = now.unix();
        processed.utc = formatUTC(now);
        response.send(processed);
        return;
    }

    if (isNaN(+value) && moment(value, 'YYYY-MM-DD', true).isValid()) {
        processed.unix = moment.utc(value).unix();
        processed.utc = formatUTC(moment(value));
    } else if (!isNaN(+value)) {
        processed.unix = +value;
        processed.utc = formatUTC(moment.utc(moment.unix(+value)));
    } else {
        response.json({"error" : "Invalid value"});
        return;
    }

    response.send(processed);
}   

module.exports = timestamp;