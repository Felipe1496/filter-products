import { MagnifyingGlass } from "phosphor-react";
import { Input } from "components/common/input/input";
import Page from "components/common/page/page";
import { useCategories } from "hooks/products/useCategories/useCategories";
import { useProducts } from "hooks/products/useProducts/useProducts";
import { Category } from "models/category/category";
import { Product } from "models/product/product";
import { FC, useEffect, useState } from "react";

import { PAGE_TITLE } from "./constants";

import styles from "./styles.module.scss";

const SearchProducts: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const productsData = useProducts();
  const categoriesData = useCategories();

  useEffect(() => {
    setProducts(productsData);
    setCategories(categoriesData);
  }, []);

  return (
    <Page title={PAGE_TITLE}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.searchInput}>
            <Input variant="search" />
            <MagnifyingGlass />
          </div>
        </div>
      </div>
    </Page>
  );
};

export { SearchProducts };
