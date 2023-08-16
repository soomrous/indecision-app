
let count =0;
const addOne =() => {
    count++;
    renderCounerApp();
};
const minusOne = () =>{
    count--;
    renderCounerApp()
};
const reset = () =>{
    count = 0;
    renderCounerApp();
};

const appRoot = document.getElementById('app');

const renderCounerApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
    
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounerApp();