import styles from "./Button.module.scss";

type Props = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: Props) => (
  <button onClick={onClick} className={styles.button}>
    {text}
  </button>
);
