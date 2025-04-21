import { useState } from 'react';
import './App.css';
import hamburger from './images/hamburger.jpg';
import cocacola from './images/coca-cola-pack.jpg';
import cruise from './images/cruise-ship.jpg';
import ferrari from './images/ferrari.jpg';
import flip_flops from './images/flip-flops.jpg';
import formula1 from './images/formula-1-car.jpg';
import mansion from './images/mansion.jpg';
import monstertruck from './images/monster-truck.jpg';
import nbateam from './images/nba-team.jpg';
import skyscraper from './images/skyscraper.jpg';
import tesla from './images/tesla.jpg';
import apache from './images/apache-helicopter.jpg';
import bill from './images/billgates.jpg';

function App() {
  const [products, setProducts] = useState([
    { name: "Big Mac", price: 2, count: 0, image: hamburger },
    { name: "coca-cola", price: 3, count: 0, image: cocacola },
    { name: "cruise", price: 3984565, count: 0, image: cruise },
    { name: "ferrari", price: 1234, count: 0, image: ferrari },
    { name: "flip-flops", price: 45423, count: 0, image: flip_flops },
    { name: "formula-1-car", price: 1235432, count: 0, image: formula1 },
    { name: "mansion", price: 1235432, count: 0, image: mansion },
    { name: "monster-truck", price: 1235432, count: 0, image: monstertruck },
    { name: "nba-team", price: 1235432, count: 0, image: nbateam },
    { name: "skyscraper", price: 123543201, count: 0, image: skyscraper },
    { name: "tesla", price: 1235432, count: 0, image: tesla },
    { name: "apache", price: 123543210, count: 0, image: apache },
  ]);

  const [totalAmount, setTotalAmount] = useState(1000000000);


  // ✔️ Buy işlemi
  const handleBuy = (index) => {
    const updatedProducts = [...products];
    const product = updatedProducts[index];
  
    // Toplam para yeterli mi?
    if (totalAmount >= product.price) {
      product.count += 1;
      setProducts(updatedProducts);
      setTotalAmount(totalAmount - product.price);
    }
  };

  // ✔️ Sell işlemi
  const handleSell = (index) => {
    const updatedProducts = [...products];
    const product = updatedProducts[index];
  
    if (product.count > 0) {
      product.count -= 1;
      setProducts(updatedProducts);
      setTotalAmount(totalAmount + product.price);
    }
  };

  const getPurchasedProducts = () => {
    const purchased = products.filter(product => product.count > 0);

    if (purchased.length === 0) {
      return <p>Henüz ürün satın alınmadı.</p>;
    }

    const totalCost = purchased.reduce(
      (sum, product) => sum + product.price * product.count,
      0
    );

    return (
      <div className='purchased-products'>
        <h2>Satın Alınan Ürünler</h2>
        <ul>
          {purchased.map((product, index) => (
            <li className='last-list' key={index}>
              {product.name} × {product.count} = ${ (product.count * product.price).toLocaleString() }
            </li>
          ))}
        </ul>
        <h3>Toplam Maliyet: ${totalCost.toLocaleString()}</h3>
      </div>
    );
  };

  return (
    <>
      <div className='first-side'>
        <img id='bill' src={bill} alt="" />
      </div>
      <div className='first-side'>
        <h2>Spend Bill Gate's Money</h2>
      </div>

      <div className='nav'>
        <nav>
          <h2>${totalAmount.toLocaleString()}</h2>
        </nav>
      </div>

      <div className='products'>
        {products.map((product, index) => (
          <div className='kutu1' key={index}>
            <img src={product.image} alt={product.name} />
            <div className='production-information'>
              <h2>{product.name}</h2>
              <h2><span>${product.price.toLocaleString()}</span></h2>
              <div className='All-buttons'>
                <button 
                  id='buy-button' 
                  onClick={() => handleBuy(index)} 
                  disabled={totalAmount < product.price}
                >
                  Buy
                </button>
                <input type="number" value={product.count} readOnly />
                <button 
                  id='sell-button' 
                  onClick={() => handleSell(index)} 
                  disabled={product.count === 0}
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="first-side">
        {getPurchasedProducts()}
      </div>
    </>
  );
}

export default App;
