const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new', {title: 'Add Ticket', flight});
  })
}

function create(req, res) {
  req.body.flight = req.params.id
  Ticket.create(req.body, function (err, ticket) {
    console.log(req.body)
    res.redirect('/flights');
  });
}

function addToFlight(req, res) {
  Flight.findById(req.params.id, function(err, movie) {
    flight.ticket.push(req.body.flightId);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    })
  })
}