import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Slogan from './Components/Slogan';
import Footer from './Components/Footer';
import Promociones from './Components/homeImage';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Slogan />
      <Promociones />
        
      {/* <Footer /> */}
    </BrowserRouter>
  
  );
}

export default App;
