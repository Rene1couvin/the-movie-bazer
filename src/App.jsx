import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Fetchs from "./component/fetchM/fethM";
import Fmovies from "./component/Fmovies/full";
import Detail from "./component/detail/detail";
import Navigation from "./component/Navigation";



function App() {
  return (
   <BrowserRouter>
   <Navigation/>
      <Routes>!
        <Route>
          <Route index element={<Home />} />
          <Route path="/" element={<Fetchs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/movies/:id" element={<Fmovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
