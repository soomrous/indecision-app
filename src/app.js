console.log('App.js is running');

const app = {
    title: 'Indecision App!!',
    subtitle: 'Put your life in the hands of a computer',
    option: ['one', 'two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.option.length > 0 ? 'Here are your options':'No Option'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form>

        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);