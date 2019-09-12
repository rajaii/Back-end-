const db = require('../database/db-config.js');

module.exports = {
    find,
    findForGet,
    getUserEvents,
    getUserEventsTotal,
    getUserEventsTodo,
    getUserEventsVendor,
    findBy,
    create,
    
}

function find() {
    return db('users').select('username', 'password');
}

function findForGet() {
    return db('users');
}

function create(user) {
    return db('users').insert(user);
}

function findBy(filter) {
    return db('users').where(filter);
}

function getUserEvents(UserId) {
    return db('users')
    .where('users.id', '=', `${UserId}`)
    .join('user_event')
    .join('events', 'events.id', '=', 'user_event.events_id')
    .select('*')
    
}

function getUserEventsTotal (UserId) {
    return db('users')
    .where('users.id', '=', `${UserId}`)
    .join('user_event')
    .where('user_event.user_id', '=', `${UserId}`)
    .join('events', 'events.id', '=', 'user_event.events_id')
    .join('todo list', 'todo list.events_id', '=', 'events.id')
    .join('event_vendors')
    .join('vendors','vendors.id', '=', 'event_vendors.vendors_id')
    .select('*');
}

function getUserEventsVendor (UserId) {
    return db('users')
    .where('users.id', '=', `${UserId}`)
    .join('user_event')
    .where('user_event.user_id', '=', `${UserId}`)
    .join('events', 'events.id', '=', 'user_event.events_id')
    .join('event_vendors')
    .join('vendors','vendors.id', '=', 'event_vendors.vendors_id')
    .select('*');
}

function getUserEventsTodo (UserId) {
    return db('users')
    .where('users.id', '=', `${UserId}`)
    .join('user_event')
    .where('user_event.user_id', '=', `${UserId}`)
    .join('events', 'events.id', '=', 'user_event.events_id')
    .join('todo list', 'todo list.events_id', '=', 'events.id')
    .select('*');
}

