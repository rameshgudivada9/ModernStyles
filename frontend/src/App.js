import './App.css';
import data from './data';

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
        data.products.map((ele)=>(
          <div key={ele._id} className="card">
          <a href={`/product/${ele._id}`}>
              <img className="medium" src={ele.image} alt={ele.name}/>
          </a>
          <div className="card-body">
          <a href={`/product/${ele._id}`}>
         <h2>{ele.name}</h2></a>
       <div className="rating">
       <span><i className="fa fa-star"></i></span>
       <span><i className="fa fa-star"></i></span>
       <span><i className="fa fa-star"></i></span>
       <span><i className="fa fa-star"></i></span>
       <span><i className="fa fa-star-o"></i></span>
       </div>
       <div className="price">₹{ele.price}</div>
          </div>
           </div>
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
