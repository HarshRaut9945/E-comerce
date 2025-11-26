
import  { useContext } from 'react'
import DataContext from '../context/DataContext';

import Product from  './Products';
import VideoPlayer from './VideoPlayer';

const All_products = () => {
  const {products}=useContext(DataContext);
  console.log("my Product = ",products);
  
  return (
    <div>
     All Products
     <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4
"/>
     <Product items={products}/>

    </div>
  )
}

export default All_products
