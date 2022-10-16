import styles from './Header.module.css';
import logoSvg from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logo" />
    </header>
  );
};