
import Landing from './pages/landing';
import Planets from './pages/Planets';
import SinglePlanet from './pages/SinglePlanet';
import NasaDailyPhoto from './pages/NasaPic';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bg-black'>
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Landing />} />
          <Route path="/table" element={<Planets />} />
          <Route path="/planet/:name" element={<SinglePlanet />} />
          <Route path="/nasapic" element={<NasaDailyPhoto />} />
      </Routes>
      </BrowserRouter>
    </>
    </div>
  );
}

export default App;
