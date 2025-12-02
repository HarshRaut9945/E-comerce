import { Link, useLocation } from 'react-router';
import ShopByCategory from './ShopByCategory';
import DataContext from '../context/DataContext';
import { ToastContainer, toast,Bounce } from "react-toastify";
import { useContext } from 'react';
const Products = ({ items }) => {
  const { addTOcart } = useContext(DataContext);

  const {pathname}=useLocation()
  return (
    <>
    <ToastContainer />
    {pathname==='/' && <ShopByCategory />}
   
    <div className="container my-5">
      <h2 className="text-center mb-4 text-light fw-bold" style={{ letterSpacing: "1px" }}>
        Featured Products
      </h2>

      <div className="row justify-content-center">
        {items.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
            
            <div className="card product-card shadow-lg">
              <Link 
                to={`/product/${product.id}`}
                className="image-container"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={product.imgSrc}
                  className="card-img-top product-img"
                  alt={product.title}
                />
              </Link>

              <div className="card-body text-center">
                <h6 className="product-title">{product.title.slice(0, 25)}...</h6>

                <p className="product-price mb-2">₹ {product.price}</p>

                <button className="btn add-to-cart w-100"
                 onClick={()=>addTOcart(
                  product.id,
                  product.title,
                  product.price,
                  product.imgSrc)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
    </>
  )
  
}

export default Products;
