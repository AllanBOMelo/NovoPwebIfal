import styles from "./Avatar.module.css";

export function Avatar() {
  return (
    <label className={styles.avatar_container}>
      <img src="https://avatars.githubusercontent.com/u/554319" alt="Avatar" />
      <input type="checkbox" />
      <div className={styles.avatar_card}>
        <img
          src="https://avatars.githubusercontent.com/u/554319"
          alt="Avatar"
        />
        <label>
          <p>Juçara Albuquerque</p>
          <span>Secretaria GC</span>
        </label>
      </div>
    </label>
  );
}
