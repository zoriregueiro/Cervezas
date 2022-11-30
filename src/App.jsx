import "./App.css";
import Beers from "./views/Beers";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import NotFound from "./views/NotFound";
import Detalles from "./views/detalles";
import HomePage from "./views/HomePage";
// import Header from "./views/Header";




function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <BrowserRouter>
      <Routes>
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<Detalles />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
    

  );
}





export default App;
