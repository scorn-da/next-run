import React from 'react';
import Link from "next/link";
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <Link href="/" className={styles.link}>
          Главная
        </Link>
      </li>
      <li>
        <Link href="/users" className={styles.link}>
          Пользователи
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;