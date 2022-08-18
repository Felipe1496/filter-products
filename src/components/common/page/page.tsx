import { FCC } from "types/react";

import { APPLICATION_NAME, DEFAULT_PAGE_DESCRIPTION } from "./constants";

interface Props {
  title?: string;
  description?: string;
}

const Page: FCC<Props> = ({
  title: partialTitle,
  description = DEFAULT_PAGE_DESCRIPTION,
  children,
}) => {
  const title = partialTitle
    ? `${partialTitle} | ${APPLICATION_NAME}`
    : APPLICATION_NAME;

  return (
    <>
      <header>
        <title>{title}</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <meta name="application-name" content={APPLICATION_NAME} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={APPLICATION_NAME} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </header>

      {children}
    </>
  );
};

export default Page;
