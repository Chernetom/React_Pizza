import './scss/app.scss';
import Header from "./modules/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {

  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
              <Routes>
                  <Route path="/"  element={<Home />}/>
                  <Route path="/cart" element={<Cart />}/>
                  <Route path="*" element={<NotFound />}/>
              </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
