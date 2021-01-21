import styles from "styles/spinner.module.css";

export default function Spinner() {
  return (
    <div
      className={`${styles.loader} ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64`}
    ></div>
  );
}
