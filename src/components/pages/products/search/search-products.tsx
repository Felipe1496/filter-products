import Page from "components/common/page/page";
import { FC } from "react";

import { PAGE_TITLE } from "./constants";

const SearchProducts: FC = () => {
  return (
    <Page title={PAGE_TITLE}>
      <h1>Hello, The brothers</h1>
    </Page>
  );
};

export { SearchProducts };
