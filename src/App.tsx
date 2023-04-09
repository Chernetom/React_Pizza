import React, {Suspense} from "react";
import './scss/app.scss';
import Header from "./modules/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {

  return (
      <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/"  element={<Home />}/>
                    <Route path="/cart" element={
                    <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                        <Cart />
                    </Suspense>}/>
                    <Route path="*" element={
                    <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                        <NotFound />
                    </Suspense>}/>
                </Routes>
            </div>
      </div>
  );
}

export default App;
