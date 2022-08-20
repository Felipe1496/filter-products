import { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  variant: "search";
}

const Input: FC<Props> = ({ variant }) => {
  switch (variant) {
    case "search":
      return (
        <div className={styles.container}>
          <input className={styles.input} />
        </div>
      );
    default:
      return <input />;
  }
};

export { Input };
