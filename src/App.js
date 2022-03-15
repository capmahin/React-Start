import logo from './logo.svg';
import './App.css';
const number = 5400;
const singer = {name:'baloman', job:'singer'};
const singer2 = {name:'balomanii', job:'singer2'};

const singerStyle= {
  color:'purple',
  backgroundColor: 'yellow'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hellow dude. React. How are you?</h3>
        </div>
        <div className="music">
          <p>Name: {number}</p>
          <p style={singerStyle}>Name: {singer.name}{singer.job}</p>
          <p style={{color:'green',backgroundColor:'white'}}>Name: {singer2.name}{singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
