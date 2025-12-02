import { useParams } from "react-router";
import { useContext } from "react";
import {items} from '../context/Data';
import Products from '../components/Products'
import DataContext from '../context/DataContext'
import './Product_Detail.css'
const Product_Detail = () => {
  const { id } = useParams();
  const {addTOcart}=useContext(DataContext);

  const product=items.find((prod)=>prod.id===parseInt(id));
  const relatedProducts = items.filter(
    (pro) => pro.category.toLowerCase() === product.category.toLowerCase()
  );

  return (
    <div>
      <div className="container my-5">
        <div className="product-detail-card">
          <div className="image-section">
            <img src={product.imgSrc} alt="{product.title}" 
            className="product-image"
            />
          </div>
          <div className="info-section">
            <div className="product-title">{product.title}</div>
             <div className="product-description">{product.description}</div>
             <div className="product-price">₹ {product.price}₹</div>
             <button className="btn add-to-cart"
              onClick={()=>addTOcart(
                  product.id,
                  product.title,
                  product.price,
                  product.imgSrc)} > 🛒 Add to Cart</button>

          </div>
        </div>
      </div>
      <h2 className="text-center my-5">Related Products</h2>
      <Products items={relatedProducts} />
    </div>
  )
}

export default Product_Detail
