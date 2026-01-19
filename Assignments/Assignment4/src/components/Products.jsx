import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get("https://dummyjson.com/products/category/smartphones")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Product List</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
