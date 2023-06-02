import React from "react";
import styles from './Header.module.scss'

interface PropsInterface {
  handlePageChange: any;
}

export default function Header({
  handlePageChange,
}: PropsInterface) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__title}>DnD Character Manager</h1>

      <ul className={`${styles.nav__list} ${styles['nav__list--navigation']}`} role="navigation">
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#" onClick={() => handlePageChange('BuildCharacter')}>
            Create a new character
          </a>
        </li>

        <li className={`${styles.nav__item} ${styles['nav__item--headertab']}`}>
          <a className={styles.nav__link} href="#" onClick={() => handlePageChange('MyCharacters')}>
            My characters
          </a>
        </li>

        <li className={`${styles.nav__item} ${styles['nav__item--headertab']}`}>
          <a className={styles.nav__link} href="#" onClick={() => handlePageChange('FriendsPg')}>
            Friends
          </a>
        </li>

        <li className={`${styles.nav__item} ${styles['nav__item--headertab']}`}>
          <a className={styles.nav__link} href="#" onClick={() => handlePageChange('GamesPg')}>
            My games
          </a>
        </li>

        <li className={`${styles.nav__item} ${styles['nav__item--headertab']}`}>
          <a className={styles.nav__link} href="#" onClick={() => handlePageChange('Profile')}>
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}
