import {Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home.jsx';
import Brochures from './pages/Brochures.jsx';
import Images from './pages/Images.jsx';
import Media from './pages/Media.jsx';
import Specs from './pages/Specs.jsx';





function App() {
  return( <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="brochures" element={<Brochures />} />
      <Route path="images" element={<Images />} />
      <Route path="media" element={<Media />} />
      <Route path="specs" element={<Specs />} />
    </Route>
  </Routes>)
}

export default App;
