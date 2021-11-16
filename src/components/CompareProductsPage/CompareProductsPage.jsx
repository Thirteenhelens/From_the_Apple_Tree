import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CompareProductCard from "../CompareProductCard/CompareProductCard";

function CompareProductsPage() {
  const compare = useSelector((store) => store.compare);

  return (
    <div>
      {compare.length === 0 && (
        <p>
          It looks like you haven't added any devices to compare! Please return
          after doing so. <Link to="/user">Home</Link>
        </p>
      )}
      {compare?.map((product) => {
        return <CompareProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}

export default CompareProductsPage;
