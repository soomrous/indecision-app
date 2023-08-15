console.log('App.js is running');

const app = {
    title: 'Indecision App!!',
    subtitle: 'Put your life in the hands of a computer',
    option: ['one', 'two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.option.length > 0 ? 'Here are your options':'No Option'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
const user = {
    name: 'Sikander Ali Soomro',
    age: "42",
    location: 'Winston Salem NC 27106'

};
function getLocation(location){
    if (location) {
        return <p> Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
        {getLocation(user.location)}

    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);