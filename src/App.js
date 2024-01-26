import Cart from './components/cart/Cart';
import Dishes from './components/dishes/Dishes';
import AllCategories from './components/filter/AllCategories';
import './App.css';

function App() {
  return (
    <div className="App">
        <AllCategories/>
      <div className='AppCartAndDishes'>
        <Cart/>
        <Dishes/>
      </div>
    </div>
  );
}

export default App;
