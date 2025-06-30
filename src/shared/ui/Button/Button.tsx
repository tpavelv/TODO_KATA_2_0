import classnames from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import styles from "./style.module.scss";

type ButtonProps = {
  title: string;
  icon?: ReactNode;
  outline?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  title,
  icon,
  outline,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, { [styles.outline]: outline })}
      onClick={onClick}
      type={type}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title}
    </button>
  );
};
