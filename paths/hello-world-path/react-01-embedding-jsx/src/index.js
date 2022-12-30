import ReactDOM from 'react-dom';

const name = "Dezzi - T'Dorable!"
const element = <h1>We have: {name}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    element
);
