import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Pulkit'
  let isLoggedin = false

  return (
    <div className="App">
      
      
        {/* function Person(props) {
        <div className='person'>
        <h1>{props.name}</h1>
        <h4>My Age: {props.age}</h4>
        </div>
  }

  let app = (
  <div>
  <Person name='Pulkit' age='21' />
  <Person name='Pulkit-2' age='21' />
  </div>
  ); */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello{ isLoggedin ? name :'world' }
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
