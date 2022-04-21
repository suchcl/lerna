import { useState } from 'react';
import { user } from './assets/data/user';
import style from "./App.module.css";

function App() {

  const [name, setName] = useState(user);

  return (
    <div className="App">
      <header className="App-header">
        <ul className={style.user}>
          {
            name.map(item => (
              <li key={item.index}>{item}</li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
