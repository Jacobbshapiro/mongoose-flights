const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function index (req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All Flights', flights });
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: 'Flight Details', flight, tickets})
        });
    });
}

function newFlight (req, res) {
    res.render('flights/new', {title: 'Flight Detial'});
}

function create (req, res) {
     for(let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            console.log(err)
            return res.redirect('/flights/new');
        }
        res.redirect('/flights');
    });
};
