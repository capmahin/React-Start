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
      <Parson name='Tamim' work="batsman"></Parson>
      <Parson name='Mosaddak' work="All-Rounder"></Parson>
      <Parson name='Mustafizur' work='Bowler'></Parson>
      <h3>New component</h3>
      <Friend movie='Murder' phone="018234355"></Friend>
      <Friend movie="Murder2" phone="019897675"></Friend>
      <Friend></Friend>
    </div>
  );
}

function Parson(props){
  console.log(props);
  return(
    <div className='parson'>
      <h1>{props.name}</h1>
      <p>Profession : {props.work}</p>
    </div>
  )
}
function Friend(props){
  console.log(props)
  return(
    <div className='container'>
      <h1>{props.phone}</h1>
      <p>Movie: {props.movie}</p>
    </div>
  )
}

export default App;
