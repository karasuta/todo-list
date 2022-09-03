import './App.css';
import { ToDo } from './ToDo';
import picture from './todo.jpg';
import pictureTwo from './todoPeople.jpg';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <img src={ picture } width="100px"  alt="list"/>
        </div>
        <div className='container'>
          <h1>Список дел</h1>
        </div>
      <ToDo/>
      <div className='container'>
          <img src={ pictureTwo  } width="200px"  alt="people"/>
        </div>
    </div>
  );
}

export default App;
