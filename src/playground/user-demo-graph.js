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
ReactDOM.render(templateTwo,appRoot);
