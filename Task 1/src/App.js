import { Routes, Route } from 'react-router-dom';
import About from './routes/about/about';
import Donate from './routes/donate/donate'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='donate' element={<Donate />} />
      </Route>
    </Routes>
  );
};

export default App;
