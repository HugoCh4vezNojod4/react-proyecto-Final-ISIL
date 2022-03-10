import logo from './logo.svg';
import './App.css';
import Navbar from './common/Navbar'
import Slider from './home/Slider'
import Articles from './home/Articles';
import Categorias from './home/Categorias';

function App() {
  return (
    <div className="App">
      <Slider/>
      <Categorias/>
      <Articles/>
    </div>
  );
}

export default App;
