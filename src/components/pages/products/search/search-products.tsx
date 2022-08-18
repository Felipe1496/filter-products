import Page from "components/common/page/page";
import { useProducts } from "hooks/products/useProducts/useProducts";
import { FC, useEffect } from "react";

import { PAGE_TITLE } from "./constants";

const SearchProducts: FC = () => {
  const products = useProducts();

  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <Page title={PAGE_TITLE}>
      <h1>Hello, The brothers</h1>
    </Page>
  );
};

export { SearchProducts };
