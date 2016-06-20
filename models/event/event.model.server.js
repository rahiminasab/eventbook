module.exports = function () {
    var mongoose = require('mongoose');
    var EventSchema = require('./event.schema.server')();

    var Event = mongoose.model("Event", EventSchema);

    var api = {
        findAllEventsForUser: findAllEventsForUser,
        findEventById: findEventById,
        createEvent: createEvent,
        updateEvent: updateEvent,
        deleteEvent: deleteEvent
    };
    
    return api;

    function findAllEventsForUser() {

    }
    function findEventById() {

    }
    function createEvent() {

    }
    function updateEvent() {

    }
    function deleteEvent() {

    }
}