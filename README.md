# timestamp

A timestamp microservice project made for freeCodeCamp, built with Moment.js.

## User stories
* A date string is valid if can be successfully parsed by `moment()`.
* If the date string is empty it should be equivalent to trigger `moment()`, i.e. the service uses the current timestamp.
* If the date string is valid the api returns a JSON having the structure
`{"unix": moment().unix(), "utc" : moment.utc(moment().unix()) }`
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
* If the date string is invalid the api returns a JSON having the structure 
`{"error" : "Invalid Date" }`.

## Live demo
[Glitch demo](https://jesuodz-timestamp.glitch.me/)
[Medium post](https://medium.com/@jesuodz/building-a-timestamp-microservice-71a1645f09d9)

## Installation
Clone this repo, then install with `npm install` and start the server with `npm start`.