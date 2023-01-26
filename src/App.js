import './scss/app.scss';
import Header from "./modules/Header";
import Categories from "./modules/Categories";
import Sort from "./modules/Sort";
import PizzaBlock from "./modules/pizzaBlock";

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
              <PizzaBlock title={"Чизбургер-пицца"} price={350}/>
              <PizzaBlock title={"Легато"} price={150}/>
              <PizzaBlock title={"Вкусно и почка"} price={100}/>
              <PizzaBlock title={"Бонапито"} price={1000}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
