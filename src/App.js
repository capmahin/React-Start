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
      <Parson></Parson>
      <Parson></Parson>
      <Parson></Parson>
      <h3>New component</h3>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Parson(){
  return(
    <div className='parson'>
      <h1>Sakib Al hassan</h1>
      <p>Profession : cricketer</p>
    </div>
  )
}
function Friend(){
  return(
    <div className='container'>
      <h1>BanglaKAku</h1>
      <p>Profession: killer</p>
    </div>
  )
}

export default App;
