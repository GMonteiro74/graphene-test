import './stylesheets/App.css';
import BigBanner from './components/BigBanner';
import Community from './components/Community';
import Footer from './components/Footer';
import Form from './components/Form';
import NavBar from './components/NavBar';
import PopularRecipes from './components/PopularRecipes';
import Menu from './components/Menu';
import { ParallaxProvider } from 'react-scroll-parallax';
import Map from './components/Map';


function App() {
  
  return (
    <ParallaxProvider>
    <div className="App">
    <NavBar />
    
    <BigBanner />
    <Community />
    <Map />
    <Menu />
    <PopularRecipes />
    <Form />

    <Footer />
    </div>
    </ParallaxProvider>
  );
}

export default App;
