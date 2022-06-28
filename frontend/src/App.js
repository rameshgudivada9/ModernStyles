import './App.css';
import data from './data';
import {Product} from './components/Product'

function App() {
  return (
    <div className="grid-container">
    <header className="row">
    <div>
        <a className="brand" href="index.html">MODERN STYLES</a>
    </div>
    <div>
        <a href="cart.html">Cart</a>
        <a href="signin.html">signin</a>
    </div>
    </header>
    <main>
    <div className="row center"> 
      {
        data.products.map((product)=>(
        <Product key={product._id} product={product}></Product>
        ))
      }

    </div>
    </main>
    <footer className="row center">
    All Rights reserved
    </footer>
        </div>
  );
}

export default App;
