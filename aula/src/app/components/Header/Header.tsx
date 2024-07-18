import { Avatar } from "../Avatar/Avatar";
import styles from "./Header.module.css";

export function Header() {
  const title = "MEUAPP";

  return (
    <header className={styles.header_container}>
      <a href="https://youtube.com" className={styles.page_logo_container}>
        <h1>M</h1>
        <h1>E</h1>
        <h1>U</h1>
        <h1>A</h1>
        <h1>P</h1>
        <h1>P</h1>
      </a>
      <Avatar />
    </header>
  );
}
