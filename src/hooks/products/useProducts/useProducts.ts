import { Product } from "models/product/product";
import Products from "data/productsCategory.json";

function useProducts(): Product[] {
  const productsData = Products.data.nodes;

  return productsData;
}

export { useProducts };
