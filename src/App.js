import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Slogan from './Components/Slogan';
import Promociones from './Components/homeImage';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Slogan />
      <Promociones />
    </BrowserRouter>
  
  );
}

export default App;
