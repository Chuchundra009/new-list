import './App.css';
import { ListBook } from './ListBook';
import image from './thought-catalog.jpg';
import imageTwo from './toa-heftiba.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={image} width="500px" alt='book' className='one-img'/>
      </div>
      <div className="container">
        <h1>Планирую прочитать</h1>
      </div>
        <ListBook/>
      <div className="container">
        <img src={imageTwo} width="500px" alt='book and table' className='two-img'/>
      </div>
    </div>
  );
}

export default App;
