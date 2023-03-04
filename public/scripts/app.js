'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App!!',
    subtitle: 'Put your life in the hands of a computer',
    option: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.option.length > 0 ? 'Here are your options' : 'No Option'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var user = {
    name: 'Sikander Ali Soomro',
    age: "42",
    location: 'Winston Salem NC 27106'

};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            ' Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
