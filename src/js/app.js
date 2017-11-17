require('../css/style.css');
let people = require('./people.js');
let $ = require('jquery');

$('#content').append('<ul></ul>');

$.each(people, function(key, value) {
  $('#content ul').append('<li>'+value.name+'</li>');
});
