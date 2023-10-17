import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Slogan from './Components/Slogan';
import Promociones from './Components/homeImage';
function App() {
  return (
    <div style={{paddingLeft:"15px", paddingRight:"15px"}}>
    <BrowserRouter>
      <Navbar />
      <Slogan />
      <Promociones />
    </BrowserRouter>
    </div>
  
  );
}

export default App;
