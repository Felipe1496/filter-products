import { Category } from "models/category/category";

interface ProductIMGInfo {
  alt: string;
  asset: { url: string };
}

export interface Product {
  name: string;
  shortDescription: string;
  id: string;
  images: ProductIMGInfo[];
  category: Category;
}
