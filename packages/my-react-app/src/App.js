import { useState } from 'react';
import { user } from './assets/data/user';
import './App.css';

function App() {

  const [name, setName] = useState([]);
  const [user, setUser] = useState("Nicholas Zakas");

  return (
    <div className="App">
      <header className="App-header">
        {user}
        <ul>
          {/* {
            name.map(item => (
              <li key={item.index}>{item}</li>
            ))
          } */}
        </ul>
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
