import styles from "./Input.module.scss";
type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input = ({ label, value, onChange, placeholder }: Props) => (
  <div className={styles.inputWrapper}>
    <label>{label}</label>
    <input value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);
