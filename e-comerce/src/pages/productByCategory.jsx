import VideoPlayer from "../components/VideoPlayer";
import Products from "../components/Products";
import { useParams } from "react-router";
import { Videos, items } from "../context/Data";

const ProductByCategory = () => {
  const { cat } = useParams();

  // Find video for category
  const videoByCategory = Videos.find(
    (vid) => vid.category.toLowerCase() === cat.toLowerCase()
  );

  // Filter products for category
  const filteredProducts = items.filter(
    (pro) => pro.category.toLowerCase() === cat.toLowerCase()
  );

  return (
    <div>
      {/* Video Section */}
      {videoByCategory ? (
        <VideoPlayer src={videoByCategory.url} />
      ) : (
        <h4 className="text-center text-danger">No Video Available</h4>
      )}

      {/* Product Section */}
      <Products items={filteredProducts} />
    </div>
  );
};

export default ProductByCategory;
