import './App.css';
import Navbar from './figma/Navbar/Navbar';
import Card from './figma/Card/Card';
import Studio from './figma/Studio/Studio';
import Testimonials from './figma/Testimonials/Testimonials'
import Recent from './figma/RecentWork/Recent';
import Gettouch from './figma/GetinTouch/Gettouch'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Studio />
      <Testimonials />
      <Recent />
      <Gettouch />
    </div>
  );
}

export default App;
