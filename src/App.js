import './scss/app.scss';
import Header from "./modules/Header";
import Categories from "./modules/Categories";
import Sort from "./modules/Sort";
import PizzaBlock from "./modules/PizzaBlock";
import pizzas from "./assets/pizzas.json";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(p => <PizzaBlock key={p.id} {...p}  />)}
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
