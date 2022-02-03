import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Home from './Home';
import NavbarComponent from './Navbar';
import Items from './Items';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route index element={<div>Squadgain Routes</div>} />
          <Route path="home" element={<Home />}>
          </Route>
          <Route path="items" element={<Items />}>
          </Route>
          <Route path="items/:id" element={<ItemDetails />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

